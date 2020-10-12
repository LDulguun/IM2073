using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Testing : MonoBehaviour
{
    // Start is called before the first frame update
    public GameObject EndScoreText;
    public GameObject EndTimeText;
    void Start()
    {
        EndScoreText.GetComponent<TMPro.TextMeshProUGUI>().text = "TOTAL SCORE: " + ScoringSystem.theScore + " pts";
        EndTimeText.GetComponent<TMPro.TextMeshProUGUI>().text = "TIME TAKEN: " + Mathf.Round(GameTime.countUp) + " s";

        Debug.Log(GameTime.countdown);
        Debug.Log(ScoringSystem.theScore);
    }


}
