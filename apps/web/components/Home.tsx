import {Card} from "@ui";
import { cards } from "./data/card";

export const Page = () => {
    return (
        <div style={{ padding: 24, display: "grid", gap: 16 }}>
            {cards.map((card) => (
                <Card
                    key={card.title}
                    title={card.title}
                    subtitle={card.subtitle}
                    description={card.description}
                    tags={card.tags}
                    actionLabel={card.actionLabel}
                    onActionClick={() => console.log(card.title)}
                />
            ))}
        </div>
    );
};