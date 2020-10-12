using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameTime : MonoBehaviour
{

    public Text countdownText;
    public static float countdown;

    public float gameDuration;

    public static float countUp;

    // Start is called before the first frame update
    void Start()
    {
        countdown = gameDuration;
    }

    // Update is called once per frame
    void Update()
    {
        if (countdown <= 0 )
        {
            PlayerManager.instance.Lost();
        }

        countdown -= Time.deltaTime;

        countdown = Mathf.Clamp(countdown, 0f, Mathf.Infinity);

        countUp = gameDuration - countdown;

        int minute = Mathf.FloorToInt(countdown / 60);
        int seconds = (int) countdown % 60;
        countdownText.text = string.Format("{0}:" + "{1}", minute, seconds);
    }

}
