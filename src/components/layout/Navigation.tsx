import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CartItem {
  name: string;
  price: string;
  emoji: string;
  type: 'donate' | 'roll';
}

interface NavigationProps {
  activeSection: string;
  cart: CartItem[];
  isCartOpen: boolean;
  onNavigate: (section: string) => void;
  onCartOpenChange: (open: boolean) => void;
  onRemoveFromCart: (index: number) => void;
  onCopyCard: () => void;
  totalPrice: number;
}

const Navigation = ({
  activeSection,
  cart,
  isCartOpen,
  onNavigate,
  onCartOpenChange,
  onRemoveFromCart,
  onCopyCard,
  totalPrice,
}: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#3d2817]/95 backdrop-blur-sm border-b-4 border-[#2d1f0f] shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 pixel-corners flex items-center justify-center">
              <span className="text-2xl">⛏️</span>
            </div>
            <span className="text-pixel text-sm md:text-base text-yellow-400">McBlazeWorld</span>
          </div>
          <div className="hidden md:flex gap-2">
            {['home', 'donate', 'rules', 'team', 'contacts'].map((section) => (
              <Button
                key={section}
                onClick={() => onNavigate(section)}
                variant={activeSection === section ? 'default' : 'ghost'}
                className="pixel-corners text-xs uppercase font-bold"
              >
                {section === 'home' && 'Главная'}
                {section === 'donate' && 'Донаты'}
                {section === 'rules' && 'Правила'}
                {section === 'team' && 'Команда'}
                {section === 'contacts' && 'Контакты'}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Sheet open={isCartOpen} onOpenChange={onCartOpenChange}>
              <SheetTrigger asChild>
                <Button className="pixel-corners relative" variant="outline" size="icon">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-500 text-white pixel-corners px-1 min-w-[20px] h-5">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#3d2817] border-l-4 border-[#2d1f0f]">
                <SheetHeader>
                  <SheetTitle className="text-pixel text-yellow-400">Корзина</SheetTitle>
                  <SheetDescription className="text-gray-300">Ваши выбранные товары</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-gray-400 text-center py-8">Корзина пуста</p>
                  ) : (
                    <>
                      <div className="space-y-2 max-h-[400px] overflow-y-auto">
                        {cart.map((item, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-[#4a3420] p-3 pixel-corners">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{item.emoji}</span>
                              <div>
                                <p className="text-white text-sm font-bold">{item.name}</p>
                                <p className="text-yellow-400 text-xs">{item.price}</p>
                              </div>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="pixel-corners"
                              onClick={() => onRemoveFromCart(idx)}
                            >
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="border-t-2 border-[#2d1f0f] pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white font-bold">Итого:</span>
                          <span className="text-yellow-400 text-xl font-bold">{totalPrice.toFixed(0)}₽</span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs text-gray-300 bg-[#4a3420] p-3 pixel-corners">
                            💳 Номер карты: <span className="text-white font-bold">2200 7007 8931 7638</span>
                          </p>
                          <Button onClick={onCopyCard} className="w-full pixel-corners bg-[#f5b759] hover:bg-[#d99f4a] text-black">
                            <Icon name="Copy" className="mr-2" size={16} />
                            Скопировать номер карты
                          </Button>
                          <p className="text-xs text-gray-400 text-center mt-2">
                            После оплаты свяжитесь с администрацией в Discord или Telegram
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
