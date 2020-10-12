using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayerStats : CharacterStats
{
    public Image healthBar;

    void Start()
    {
        RuneManager.instance.onRuneActivated += OnRuneActivated;
    }

    void OnRuneActivated (Rune newRune, Rune oldRune)
    {
        if (newRune != null)
        {
            mvSpeed.AddModifier(newRune.msModifier);
            eatSpeed.AddModifier(newRune.esModifier);
            invulnerable.AddModifier(newRune.invulModifier);
            invisible.AddModifier(newRune.invisModifier);
        }

        if (oldRune != null)
        {
            mvSpeed.RemoveModifier(oldRune.msModifier);
            eatSpeed.RemoveModifier(oldRune.esModifier);
            invulnerable.RemoveModifier(oldRune.invulModifier);
            invisible.RemoveModifier(oldRune.invisModifier);
        }
    }


    public override void Die()
    {
        PlayerManager.instance.Lost();
    }

    public override void UpdateHealthBar()
    {
        healthBar.fillAmount = currentHealth * 1.0f / maxHealth;
    }
}
