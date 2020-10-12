using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(CharacterStats))]
public class CharacterCombat : MonoBehaviour
{
    CharacterStats myStats;
    float attackCooldown = 0f;

    public float attackDelay = .6f;

    void Start()
    {
        myStats = GetComponent<CharacterStats>();
    }

    void Update ()
    {
        attackCooldown -= Time.deltaTime;
    }

    public void Attack (CharacterStats targetStats)
    {
        if (attackCooldown <= 0f)
        {
            StartCoroutine(DoDamage(targetStats, attackDelay));
            attackCooldown = 1f / myStats.attackSpeed.GetValue();
        }
    }

    public void Eat (CharacterStats targetStats)
    {
        targetStats.TakeDamage(100);
        myStats.Heal(10);
    }

    IEnumerator DoDamage (CharacterStats stats, float delay)
    {
        yield return new WaitForSeconds(delay);
        stats.TakeDamage(myStats.damage.GetValue());
    }
}
