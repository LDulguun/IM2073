using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;


[RequireComponent(typeof(NavMeshAgent))]
public class NeutralController : MonoBehaviour
{
    public float lookRadius = 10f;
    public float roamRadius = 8f;
    public float roamClock = 3f;

    float timer = 0f;

    NavMeshAgent agent;
    Transform target;

    // Start is called before the first frame update
    void Start()
    {
        target = PlayerManager.instance.player.transform;
        agent = GetComponent<NavMeshAgent>();
    }

    // Update is called once per frame
    void Update()
    {
        float distance = Vector3.Distance(target.position, transform.position);

        timer -= Time.deltaTime;

        if (distance <= lookRadius && !target.GetComponent<CharacterStats>().invisible.GetValue())
        {
            agent.SetDestination(2 * transform.position - target.position);

        } else
        {
            if (timer < 0f)
            {
                agent.SetDestination(RandomNavmeshLocation(roamRadius));
                timer = roamClock;
            }
        }       
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.green;
        Gizmos.DrawWireSphere(transform.position, lookRadius);
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

}
