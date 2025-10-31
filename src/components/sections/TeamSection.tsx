import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TeamSection = () => {
  const teamMembers = [
    { name: 'sneil1', role: 'GL.Владелец', avatar: '👑' },
    { name: 'Zenu_987_Tyer', role: 'Владелец', avatar: '👑' },
    { name: 'Mentos228', role: 'GL.ADMIN', avatar: '👨‍💼' },
  ];

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-pixel text-2xl md:text-4xl text-yellow-400 mb-4">👥 НАША КОМАНДА</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Администрация сервера всегда готова помочь!</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <Card key={idx} className="pixel-corners bg-[#4a3420] border-4 border-[#2d1f0f] hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-pixel text-lg text-white mb-2">{member.name}</h3>
                <Badge className="pixel-corners bg-yellow-400 text-black">{member.role}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
