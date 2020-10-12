using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TargetPrey : Interactable
{
    PlayerManager playerManager;
    CharacterStats preyStats;
    public GameObject screamsphere;
    public Transform refPos;

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
            Instantiate(screamsphere, refPos);
            playerManager.targetEaten();
            playerCombat.Eat(preyStats);
        }
    }
}
