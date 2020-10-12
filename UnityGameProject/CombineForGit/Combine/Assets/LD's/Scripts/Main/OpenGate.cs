using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OpenGate : MonoBehaviour
{
    public void OnTriggerStay(Collider other)
    {
        if (other.GetComponent<PlayerStats>() != null)
        {
            if (PlayerManager.instance.targetCheck() <= 0)
                PlayerManager.instance.Won();
            else
                Debug.Log("Not enough targets collected");

        }
        
    }    
}
