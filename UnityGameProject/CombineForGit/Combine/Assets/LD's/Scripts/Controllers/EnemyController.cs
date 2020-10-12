using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;


[RequireComponent(typeof(NavMeshAgent))]
[RequireComponent(typeof(CharacterCombat))]
public class EnemyController : MonoBehaviour
{
    public float lookRadius = 10f;
    public float roamRadius = 8f;
    public float roamClock = 3f;

    float timer = 0f;

    NavMeshAgent agent;
    Transform target;
    CharacterCombat combat;

    // Start is called before the first frame update
    void Start()
    {
        target = PlayerManager.instance.player.transform;
        agent = GetComponent<NavMeshAgent>();
        combat = GetComponent<CharacterCombat>();
    }

    // Update is called once per frame
    void Update()
    {
        float distance = Vector3.Distance(target.position, transform.position);

        timer -= Time.deltaTime;

        if (distance <= lookRadius && !target.GetComponent<CharacterStats>().invisible.GetValue())
        {
            //Chase Target
            agent.SetDestination(target.position);

            if (distance <= agent.stoppingDistance)
            {
                CharacterStats targetStats = target.GetComponent<CharacterStats>();
                if (targetStats != null)
                    combat.Attack(targetStats);
                FaceTarget();
            }
        } else
        {
            //Roam around
            if (timer < 0f)
            {
                agent.SetDestination(RandomNavmeshLocation(roamRadius));
                timer = roamClock;
                //Debug.Log("changing direction");
            }
        }

        
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireSphere(transform.position, lookRadius);
    }

    public void FaceTarget()
    {
        Vector3 direction = (target.position - transform.position).normalized;
        Quaternion lookRotation = Quaternion.LookRotation(new Vector3(direction.x, 0f, direction.z));
        transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * 5f);
    }

    public Vector3 RandomNavmeshLocation(float radius)
    {
        Vector3 randomDirection = Random.insideUnitSphere * radius;
        randomDirection += transform.position;
        NavMeshHit hit;
        Vector3 finalPosition = Vector3.zero;
        if (NavMesh.SamplePosition(randomDirection, out hit, radius, 1))
        {
            finalPosition = hit.position;
        }
        return finalPosition;
    }
    
    public void RespondToScream(Vector3 position)
    {   
        //go to the origin of scream unless it sees the player
        if (Vector3.Distance(target.position, transform.position) > lookRadius)
            agent.SetDestination(position);
    }
}
