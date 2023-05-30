import Card, { CustomCardProps } from "../CustomCard";

type CardListProps = {
  cards: CustomCardProps[];
};

export const CardList = ({ cards }: CardListProps) => {
  return (
    <div className="min-h-screen p-8 flex items-start justify-center">
      <div className="flex flex-col items-start space-y-4">
        {cards?.map((item) => (
          <Card key={item.id} id={String(item.id)} title={item.title} />
        ))}
      </div>
    </div>
  );
};
