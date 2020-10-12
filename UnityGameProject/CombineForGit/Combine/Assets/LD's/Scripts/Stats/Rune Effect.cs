using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[System.Serializable]
public class RuneEff
{
    [SerializeField]

    public bool baseValue = false;
    public bool currentValue { get; private set; }

    private List<bool> modifiers = new List<bool>();

    public bool GetValue()
    {
        bool currentValue = baseValue;
        modifiers.ForEach(x => currentValue = currentValue || x);
        return currentValue;
    }

    public void SetValue(bool value)
    {
        currentValue = value;
    }

    public void AddModifier(bool modifier)
    {
        modifiers.Add(modifier);
    }

    public void RemoveModifier(bool modifier)
    {
        modifiers.Remove(modifier);
    }
}
