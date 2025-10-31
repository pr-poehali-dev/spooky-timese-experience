import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const RulesSection = () => {
  const rules = [
    { id: 1, text: 'Запрещён читерский софт и использование багов' },
    { id: 2, text: 'Уважайте других игроков, запрещён мат и оскорбления' },
    { id: 3, text: 'Не спамьте в чате и не флудите' },
    { id: 4, text: 'Запрещена реклама других серверов' },
  ];

  return (
    <section id="rules" className="py-20 bg-[#2d1f0f]/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">📜 ПРАВИЛА СЕРВЕРА</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Соблюдайте правила для комфортной игры всех участников</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {rules.map((rule) => (
            <Card key={rule.id} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f]">
              <CardContent className="p-6 flex items-start gap-4">
                <Badge className="pixel-corners bg-yellow-400 text-black text-sm font-bold flex-shrink-0">{rule.id}</Badge>
                <p className="text-gray-200 flex-1">{rule.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
