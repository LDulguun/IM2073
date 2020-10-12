using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[System.Serializable]
public class Stat
{
    [SerializeField]

    public int baseValue;
    public int currentValue { get; private set; }

    private List<int> modifiers = new List<int>();

    public int GetValue ()
    {
        int currentValue = baseValue;
        modifiers.ForEach(x => currentValue += x);
        return currentValue;
    }

    public void SetValue(int value)
    {
        currentValue = value;
    }

    public void AddModifier (int modifier)
    {
        if (modifier != 0)
            modifiers.Add(modifier);
    }

    public void RemoveModifier (int modifier)
    {
        if (modifier != 0)
            modifiers.Remove(modifier);
    }
}
