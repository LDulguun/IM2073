using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class RuneManager : MonoBehaviour
{
    #region Singleton

    public static RuneManager instance;

    void Awake()
    {
        if (instance != null)
        {
            Debug.LogWarning("More than one instance of Inventory Found!");
            return;
        }
        instance = this;
    }

    #endregion

    public Rune[] currentRune;
    float[] runeDurations;
    int[] runeCounter;
    Image[] runeStatuses;

    public Image hasteStatus;
    public Image gluttonyStatus;
    public Image invisStatus;
    public Image invulStatus;

    public delegate void OnRuneActivated(Rune newRune, Rune oldRune);
    public OnRuneActivated onRuneActivated;

    int numSlots;

    void Start ()
    {
        numSlots = System.Enum.GetNames(typeof(RuneSlot)).Length;
        currentRune= new Rune[numSlots];
        runeDurations = new float[numSlots];
        runeStatuses = new Image[4] {hasteStatus, gluttonyStatus, invisStatus, invulStatus };
        runeCounter = new int[numSlots];
    }

    void Update ()
    {
        for (int i = 0; i < numSlots; i++)
        {
            if (runeDurations[i] > 0f && currentRune[i] != null)
            {
                runeDurations[i] -= Time.deltaTime;
            }

            if (runeDurations[i] <= 0f && currentRune[i] != null)
                if (currentRune[i].isTimeLimited)
                {
                    Deactivate(currentRune[i]);
                }
        }
        UpdateRuneStatus();
    }

    public void Activate(Rune newRune, Rune oldRune)
    {
        int slotIndex = (int) newRune.runeSlot;

        if (onRuneActivated != null)
        {
            onRuneActivated.Invoke(newRune, oldRune);
        }

        if (newRune.isTimeLimited)
        {
            runeDurations[slotIndex] += newRune.durationGain;
        }

        currentRune[slotIndex] = newRune;
    }

    public void Deactivate(Rune oldRune)
    {
        if (oldRune != null)
        {
            int slotIndex = (int)oldRune.runeSlot;

            if (onRuneActivated != null)
            {
                onRuneActivated.Invoke(null, oldRune);
            }

            currentRune[slotIndex] = null;
        }

    }


    public void UpdateRuneStatus()
    {
        for (int i = 0; i < numSlots; i++)
        {
            if (runeDurations[i] > 0f && currentRune[i] != null)
                runeStatuses[i].fillAmount = runeDurations[i] / currentRune[i].durationGain;
            if (currentRune[i] == null)
                runeStatuses[i].fillAmount = 0;
        }
    }
}
