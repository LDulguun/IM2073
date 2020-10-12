using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "New Rune", menuName = "Inventory/Rune")]
public class Rune : Item
{
    public RuneSlot runeSlot;
    public int msModifier;
    public int esModifier;
    public bool invisModifier;
    public bool invulModifier;
    public bool isTimeLimited;
    public float durationGain;

}


public enum RuneSlot {Haste, Invis, Invul, Eater}