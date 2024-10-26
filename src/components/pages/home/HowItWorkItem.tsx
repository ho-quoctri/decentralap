import Image from "next/image";

interface HowItWorkItemProps {
  title: string;
  description: string;
  image: string;
}

export function HowItWorkItem(props: HowItWorkItemProps) {
  return (
    <div className="how-it-work-item">
      <Image src={`/images/${props.image}.png`} alt="Two-Level Referral System image" width={46} height={46} />
      <div className="item-content">
        <div className="item-content-title">{props.title}</div>
        <p className="item-content-description">{props.description}</p>
      </div>
    </div>
  )
}