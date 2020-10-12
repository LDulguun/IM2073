using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoringSystem : MonoBehaviour
{
    public GameObject ScoreTxt;
    public static int theScore;
    void Update()
    {
        ScoreTxt.GetComponent<TMPro.TextMeshProUGUI>().text = "SCORE: " + theScore;
    }
}
