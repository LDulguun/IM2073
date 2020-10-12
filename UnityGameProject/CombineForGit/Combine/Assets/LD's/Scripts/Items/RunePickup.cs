using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RunePickup : Interactable
{
    public GameObject pickupEffect;
    public int Score = 50;
    public Rune rune;

    public override void Interact()
    {
        base.Interact();

        PickUp();
    }

    void PickUp() {
        Rune oldRune = RuneManager.instance.currentRune[(int)rune.runeSlot];
        RuneManager.instance.Activate(rune, oldRune);
        Destroy(gameObject);
        Instantiate(pickupEffect, transform.position, transform.rotation);
        ScoringSystem.theScore += Score;
    }
}
