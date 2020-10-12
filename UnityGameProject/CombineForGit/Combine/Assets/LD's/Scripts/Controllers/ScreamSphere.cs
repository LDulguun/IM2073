using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScreamSphere : MonoBehaviour
{
    public float duration;
    float remainingTime;

    private void Start()
    {
        Debug.Log("Started screaming");
    }

    void Awake()
    {
        remainingTime = duration;
        Debug.Log("Aaaaaaaaaa " + GetComponent<Transform>().position + " " + remainingTime);
    }
 
    void Update()
    {
        Debug.Log("ak");
        remainingTime -= Time.deltaTime;

        if (remainingTime < 0.0f)
        {
            Destroy(gameObject);
        }
    }

    public void OnTriggerStay(Collider other)
    {
        if (other.GetComponent<EnemyController>() != null)
            other.GetComponent<EnemyController>().RespondToScream(transform.position);
    }
}
