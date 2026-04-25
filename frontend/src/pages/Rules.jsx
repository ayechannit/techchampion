const Rules = () => {
  return (
    <main>
      <section className="content-hero">
        <p className="eyebrow">Competition protocol</p>
        <h1>Player Rules</h1>
        <p className="hero-text">Typing Championship 2026 official player rules, score system, identity requirements, and organiser decisions.</p>
      </section>

      <section className="rules-document" aria-label="Typing Championship 2026 player rules" lang="my">
        <article className="rule-section">
          <p className="eyebrow">General Rules</p>
          <h2>အထွေထွေစည်းမျဉ်းများ</h2>
          <ol className="rule-list">
            <li>ပြိုင်ပွဲဝင်အားလုံးသည် Typing Championship 2026 Organizer အဖွဲ့မှ သတ်မှတ်ထားသော စည်းမျဉ်းများအား လိုက်နာရမည်ဖြစ်သည်။</li>
            <li>ပြိုင်ပွဲအတွင်း ဖြစ်ပေါ်လာသော အဆုံးအဖြတ်များကို Organizer မှသာ နောက်ဆုံးဆုံးဖြတ်မည်ဖြစ်ပြီး မည်သည့်အကြောင်းကြောင့်မဆို ပြန်လည်ပြင်ဆင်ခွင့် မရှိပါ။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Gameplay Rules</p>
          <h2>ပြိုင်ပွဲကစားပုံစည်းမျဉ်းများ</h2>
          <ol className="rule-list" start="3">
            <li>ပြိုင်ပွဲဝင်တစ်ဦးသည် ပြိုင်ပွဲတစ်လျှောက်လုံးတွင် စုစုပေါင်း ၃ ကြိမ်သာ ဝင်ရောက်ယှဉ်ပြိုင်ခွင့်ရှိသည်။ ထို ၃ ကြိမ်အတွင်း အကောင်းဆုံးရလဒ်ကိုသာ Leaderboard တွင် သတ်မှတ်မည်။</li>
            <li>စနစ်အမှား (System Error) ဖြစ်ပွားခဲ့သည်ဟု Staff မှ အတည်ပြုမှသာ ပြန်လည်ယှဉ်ပြိုင်ခွင့်ပြုမည်ဖြစ်သည်။</li>
            <li>ပြိုင်ပွဲကို Organizer မှ သတ်မှတ်ထားသော Computer / Keyboard များဖြင့်သာ ကစားရမည်ဖြစ်ပြီး ကိုယ်ပိုင်ပစ္စည်းများ အသုံးပြုခွင့်မရှိပါ။</li>
          </ol>
        </article>

        <article className="rule-section rule-section-wide">
          <p className="eyebrow">Score System</p>
          <h2>Score စနစ်</h2>
          <ol className="rule-list" start="6">
            <li>
              Final Score ကို အောက်ပါအတိုင်း တွက်ချက်မည်။
              <div className="formula-card">Final Score = (WPM x 10) + Accuracy - (Mistakes x 2)</div>
            </li>
            <li>
              အနိုင်ရသူများကို Final Score အမြင့်ဆုံးအလိုက် သတ်မှတ်မည်ဖြစ်ပြီး Score တူညီပါက အောက်ပါအစဉ်အတိုင်း Rank သတ်မှတ်ပါမည်။
              <ul className="rule-sublist">
                <li>WPM မြင့်သူ</li>
                <li>Accuracy မြင့်သူ</li>
                <li>Mistake နည်းသူ</li>
              </ul>
            </li>
          </ol>
          <p className="rule-note">Winner Rank ထပ်တူညီနေပါက Final Round ထပ်မံယှဉ်ပြိုင်ရပါမည်။</p>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Cheating</p>
          <h2>မတရားပြုလုပ်မှုများ</h2>
          <ol className="rule-list" start="8">
            <li>
              အောက်ပါအပြုအမူများကို မည်သည့်အချိန်တွင်မဆို တွေ့ရှိပါက ချက်ချင်း Disqualify လုပ်မည်။
              <ul className="rule-sublist">
                <li>Auto typing software / Macro အသုံးပြုခြင်း</li>
                <li>Copy / Paste အသုံးပြုခြင်း</li>
                <li>အခြားသူမှ ကူညီပေးခြင်း</li>
                <li>မမှန်ကန်သော နည်းလမ်းများ အသုံးပြုခြင်း</li>
              </ul>
            </li>
            <li>Suspicious ဖြစ်သော Result များအား Organizer မှ မကြာခဏစစ်ဆေးနိုင်ပြီး လိုအပ်ပါက ရလဒ်ပယ်ဖျက်နိုင်သည်။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Player Identity</p>
          <h2>Player Identity စည်းမျဉ်း</h2>
          <ol className="rule-list" start="10">
            <li>
              ပြိုင်ပွဲဝင်သူများသည် မိမိအမျိုးအစားအလိုက် မှန်ကန်သော ID ဖြင့် မှတ်ပုံတင်ရမည်။
              <ul className="rule-sublist">
                <li>Adult - NRC</li>
                <li>Youth - Student ID</li>
              </ul>
            </li>
            <li>မိမိအသက်အရွယ်နှင့် မကိုက်ညီသော Tier တွင် ဝင်ရောက်ယှဉ်ပြိုင်ပါက ချက်ချင်း Disqualify လုပ်မည်။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Leaderboard & Prizes</p>
          <h2>Leaderboard & ဆုများ</h2>
          <ol className="rule-list" start="12">
            <li>Leaderboard သည် System မှ မှတ်တမ်းတင်ထားသော Result များအပေါ် အခြေခံ၍ ပြသမည်ဖြစ်သည်။</li>
            <li>ဆုရရှိသူများသည် ဆုယူချိန်တွင် မူရင်း ID ကို ပြသရမည်ဖြစ်သည်။ မမှန်ကန်ပါက ဆုပယ်ဖျက်မည်။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Technical & System</p>
          <h2>Technical & System စည်းမျဉ်း</h2>
          <ol className="rule-list" start="14">
            <li>System Error ဖြစ်ပွားပါက Staff ၏ ဆုံးဖြတ်ချက်အပေါ် မူတည်၍ ပြန်လည်ကစားခွင့်ပြုမည်ဖြစ်သည်။</li>
            <li>System ထဲတွင် မှတ်တမ်းတင်ထားသော Data များကို Organizer မှသာ ပြင်ဆင်နိုင်ပြီး Player များအနေဖြင့် ပြောင်းလဲခွင့်မရှိပါ။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Player Conduct</p>
          <h2>အပြုအမူစည်းမျဉ်း</h2>
          <ol className="rule-list" start="16">
            <li>အခြားပြိုင်ပွဲဝင်သူများအား အနှောင့်အယှက်မဖြစ်စေရန် လိုက်နာရမည်။</li>
            <li>ပြိုင်ပွဲအတွင်း Coaching (ညွှန်ကြားခြင်း) မပြုလုပ်ရ။</li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Organiser Rights</p>
          <h2>Organizer အခွင့်အရေး</h2>
          <ol className="rule-list" start="18">
            <li>
              အောက်ပါအခြေအနေများတွင် Organizer မှ Disqualify လုပ်နိုင်သည်။
              <ul className="rule-sublist">
                <li>စည်းမျဉ်းချိုးဖောက်ခြင်း</li>
                <li>မတရားနည်းလမ်းအသုံးပြုခြင်း</li>
                <li>မသင့်တော်သောအပြုအမူ</li>
                <li>Suspicious activity တွေ့ရှိခြင်း</li>
              </ul>
            </li>
          </ol>
        </article>

        <article className="rule-section">
          <p className="eyebrow">Media Consent</p>
          <h2>Media Consent</h2>
          <ol className="rule-list" start="19">
            <li>ပြိုင်ပွဲတွင် ရိုက်ကူးထားသော ဓာတ်ပုံများ၊ ဗီဒီယိုများကို Organizer မှ Promotion အတွက် အသုံးပြုနိုင်သည်။</li>
          </ol>
        </article>

        <article className="rule-section rule-section-wide">
          <p className="eyebrow">Agreement</p>
          <h2>သဘောတူညီချက်</h2>
          <ol className="rule-list" start="20">
            <li>ဤပြိုင်ပွဲတွင် ပါဝင်ခြင်းဖြင့် ပြိုင်ပွဲဝင်သူသည် အထက်ဖော်ပြပါ စည်းမျဉ်းများအား လိုက်နာပြီးဖြစ်ကြောင်းနှင့် Organizer ၏ နောက်ဆုံးဆုံးဖြတ်ချက်ကို လက်ခံကြောင်း သဘောတူပါသည်။</li>
          </ol>
        </article>
      </section>
    </main>
  );
};

export default Rules;
