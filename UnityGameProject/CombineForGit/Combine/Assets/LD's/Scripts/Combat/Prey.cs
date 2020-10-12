using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterStats))]
public class Prey : Interactable
{
    public GameObject Effect;
    PlayerManager playerManager;
    CharacterStats preyStats;
    public GameObject screamsphere;

    void Start()
    {
        playerManager = PlayerManager.instance;
        preyStats = GetComponent<CharacterStats>();
    }

    public override void Interact()
    {
        base.Interact();
        CharacterCombat playerCombat = playerManager.player.GetComponent<CharacterCombat>();
        if (playerCombat != null)
        {
            Vector3 pos = GetComponent<Transform>().position;
            Quaternion rot = GetComponent<Transform>().rotation;
            Instantiate(Effect, transform.position, transform.rotation);
            Instantiate(screamsphere, pos, rot);
            playerCombat.Eat(preyStats);
            ScoringSystem.theScore += 50;
        }
    }
}
