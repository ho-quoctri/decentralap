'use client'
import { HowItWorkItem } from "@/components/pages/home/HowItWorkItem";
import { TierChart } from "@/components/pages/home/TierChart";
import Icon from "@/components/ui/Icon";
import { HOW_IT_WORK } from "@/contants/how-it-works";

export default function Home() {
  return (
    <main className="referral-manager">
      <section className="referral-infomation">
        <div className="referral-infomation-container container">
          <div className="rereferral-infomation-left">
            <h1 className="rereferral-infomation-title">Unlock Rewards with the Copin Referral Program</h1>
            <p className="rereferral-infomation-description">Earn rebates and commissions by inviting friends. <br />
              Grow your network and benefit from our 6-tier reward system.</p>
            <div className="rereferral-button">
              <div>View referral Ranking</div> <Icon name="arrow-right" size={16} />
            </div>
          </div>
          <div className="rereferral-infomation-right">
            <TierChart />
          </div>
        </div>
      </section>

      <section className="referral-how-it-work">
        <div className="referral-how-it-work-container container">
          <div className="referral-how-it-work-title">
            <Icon name="light" />
            <div>How It Works?</div>
          </div>
          <div className="how-it-work-items">
            {HOW_IT_WORK.map((item, index) =><HowItWorkItem key={index} title={item.title} image={item.image} description={item.description} /> )}
          </div>
        </div>

      </section>

      <section className="referral-apply">
        <div className="referral-apply-container container">
          <div className="referral-apply-content">
            <div className="referral-apply-title">Apply <span className="referral-apply-name">Copin Affilate Program</span> to get more benefits!</div>
            <div className="referral-apply-contact">Contact us</div>
          </div>
        </div>
      </section>
    </main>
  );
}
