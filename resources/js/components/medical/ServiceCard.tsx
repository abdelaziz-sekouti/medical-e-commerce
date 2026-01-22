import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Stethoscope } from 'lucide-react';

interface ServiceProps {
    title: string;
    description: string;
    price: number;
    duration: string;
    serviceType: string;
}

export default function ServiceCard({ title, description, price, duration, serviceType }: ServiceProps) {
    const handleWhatsAppOrder = () => {
        const message = `Hello, I would like to order the following consultation service:
– ${title}
– Price: ${price} MAD
Thank you.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/212612236660?text=${encodedMessage}`, '_blank');
    };

    return (
        <Card className="flex flex-col h-full border-border/50 hover:border-primary/50 transition-all hover:shadow-lg bg-white">
            <CardHeader>
                <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                        {serviceType}
                    </span>
                    <span className="text-2xl font-bold text-blue-900">{price} MAD</span>
                </div>
                <CardTitle className="text-xl text-indigo-700 hover:text-indigo-400 transition-colors">{title}</CardTitle>
                <CardDescription className="line-clamp-2 text-black">{description}</CardDescription>
            </CardHeader>
            <CardContent className="grow">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-black" />
                        {duration}
                    </div>
                    <div className="flex items-center gap-1 text-black" >
                        <Stethoscope className="h-4 w-4 text-black" />
                        Certified Care
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-indigo-600 transition-colors font-semibold hover:border-indigo-600 cursor-pointer"
                    onClick={handleWhatsAppOrder}
                >
                    Order on WhatsApp
                </Button>
            </CardFooter>
        </Card>
    );
}
