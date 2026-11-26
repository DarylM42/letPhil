export type CheckoutForm = {
    name: string;
    address: string;
    city: string;
    zip: string;
    cardName: string;
    cardNumber: string;
    expiry: string;
};

export type CheckoutErrors = Partial<Record<keyof CheckoutForm, string>>;