using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TriggerFunction : MonoBehaviour
{
    public bool triggered = false;

    public void OnTriggerEnter(Collider other)
    {
        MeshRenderer meshRend = GetComponent<MeshRenderer>();
        meshRend.material.color = Color.green;
        Debug.Log(other.name);
        triggered = true;
    }

    public void OnTriggerExit(Collider other)
    {
        MeshRenderer meshRend = GetComponent<MeshRenderer>();
        meshRend.material.color = Color.yellow;
        triggered = false;
    }

}
