using UnityEngine;

public class CharacterStats : MonoBehaviour
{
    public int maxHealth = 100;
    public int initialHealth = 100;
    public int currentHealth { get; private set; }

    public Stat damage;
    public Stat mvSpeed;
    public Stat attackSpeed;
    public Stat eatSpeed;
    public RuneEff invulnerable;
    public RuneEff invisible;

    void Awake ()
    {
        currentHealth = initialHealth;
        mvSpeed.SetValue(mvSpeed.baseValue);
        damage.SetValue(damage.baseValue);
        attackSpeed.SetValue(attackSpeed.baseValue);

        UpdateHealthBar();
    }

    public void TakeDamage (int damage)
    {
        if (!invulnerable.GetValue())
        {
            currentHealth -= damage;
            
            if (currentHealth <= 0)
            {
                currentHealth = 0;
                Die();
            }
        }

        UpdateHealthBar();
    }

    public void Heal(int heal)
    {
        currentHealth += heal;

        if (currentHealth > maxHealth)
        {
            currentHealth = maxHealth;
        }

        UpdateHealthBar();
    }

    public virtual void Die ()
    {
        //To be overridden in different character deaths
        Destroy(gameObject);
    }

    public virtual void UpdateHealthBar()
    {
        //Debug.Log(transform.name + " updating healthbar");
    }
}
