using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterStats))]
public class Beast : Interactable
{
    PlayerManager playerManager;
    CharacterStats myStats;

    void Start()
    {
        playerManager = PlayerManager.instance;
        myStats = GetComponent<CharacterStats>();
    }

    public override void Interact()
    {
        CharacterCombat enemyCombat = GetComponent<CharacterCombat>();
        if (enemyCombat != null)
        {
            enemyCombat.Attack(playerManager.player.GetComponent<CharacterStats>());
        }
    }
}
