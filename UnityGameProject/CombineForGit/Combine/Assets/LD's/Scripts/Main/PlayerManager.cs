using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class PlayerManager : MonoBehaviour
{
    #region Singleton

    public static PlayerManager instance;

    void Awake ()
    {
        instance = this;
    }

    #endregion

    public GameObject player;
    public GameObject targetsText;
    public Text gameOverText;

    public int totalTargets;

    bool gameOverFlag;
    int targetsLeft;

    public void Start()
    {
        targetsLeft = totalTargets;
        UpdateTargetText();
    }

    public void targetEaten()
    {
        targetsLeft -= 1;
        UpdateTargetText();
    }

    public int targetCheck()
    {
        return targetsLeft;
    }

    public void UpdateTargetText()
    {
        targetsText.GetComponent<TMPro.TextMeshProUGUI>().text = string.Format("{0} targets left", targetsLeft);
    }

    public void Won()
    {
        gameOverFlag = true;
        SceneManager.LoadScene("Win");
        //to be edited
    }

    public void Lost()
    {
        gameOverFlag = true;
        //to be edited
        //SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }

    public void KillPlayer()
    {
        Lost();
    }
}
