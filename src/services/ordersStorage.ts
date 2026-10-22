export interface CakeOrderItem {
  id: string;
  title: string;
  size: string;
  flavor: string;
  inscription?: string;
  glutenFriendly?: boolean;
  unitPrice: number;
  quantity: number;
}

export interface StudioOrder {
  id: string; // e.g. AC-842911
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  eventDate: string;
  fulfillment: 'pickup' | 'delivery';
  deliveryAddress?: string;
  items: CakeOrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'New' | 'In Production' | 'Ready for Pickup' | 'Delivered' | 'Completed';
  createdAt: string;
  paymentMethod: string;
}

export interface StudioInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  servingsCount: string;
  stylePalette: string;
  inspirationDetails: string;
  budgetRange: string;
  dietaryRequirements: string;
  deliveryLocation: string;
  createdAt: string;
  status: 'Unread' | 'In Discussion' | 'Quoted' | 'Booked';
}

const ORDERS_KEY = 'tac_orders_v1';
const INQUIRIES_KEY = 'tac_inquiries_v1';

// Initial realistic seed data for The Austin Cakery
const INITIAL_ORDERS: StudioOrder[] = [
  {
    id: 'AC-948201',
    customerName: 'Sarah Jenkins',
    customerEmail: 'sarah.jenkins@gmail.com',
    customerPhone: '(512) 840-2910',
    eventDate: '2026-11-14',
    fulfillment: 'delivery',
    deliveryAddress: '2408 Crystal Falls Pkwy, Leander, TX 78641',
    items: [
      {
        id: 'wedding-tiered',
        title: 'Tiered Fine-Art Floral Wedding Cake',
        size: '3-Tier (6" + 8" + 10") • 75-90 Servings',
        flavor: 'Madagascar Vanilla Bean & Raspberry Rose',
        inscription: 'S & M • Forever',
        glutenFriendly: false,
        unitPrice: 460,
        quantity: 1,
      },
    ],
    subtotal: 460,
    tax: 37.95,
    deliveryFee: 25,
    total: 522.95,
    status: 'In Production',
    createdAt: '2026-10-21T14:32:00Z',
    paymentMethod: 'Visa •••• 4242',
  },
  {
    id: 'AC-839120',
    customerName: 'Marcus Vance',
    customerEmail: 'marcus.vance@techcorp.io',
    customerPhone: '(512) 712-4491',
    eventDate: '2026-10-28',
    fulfillment: 'pickup',
    items: [
      {
        id: 'sculptural-textured',
        title: 'Textural Espresso Salted Caramel Cake',
        size: '8-inch Two-Layer • 14-18 Servings',
        flavor: 'Espresso Velvet & Salted Dulce Buttercream',
        inscription: 'Happy 30th Birthday Marcus!',
        glutenFriendly: true,
        unitPrice: 95,
        quantity: 1,
      },
    ],
    subtotal: 95,
    tax: 7.84,
    deliveryFee: 0,
    total: 102.84,
    status: 'Ready for Pickup',
    createdAt: '2026-10-20T09:15:00Z',
    paymentMethod: 'Mastercard •••• 8821',
  },
  {
    id: 'AC-719342',
    customerName: 'Elena Rostova',
    customerEmail: 'elena.rostova@austindesign.com',
    customerPhone: '(512) 555-0199',
    eventDate: '2026-11-02',
    fulfillment: 'pickup',
    items: [
      {
        id: 'botanical-monochrome',
        title: 'Botanical Blush Meadow Cake',
        size: '6-inch Tall • 10-12 Servings',
        flavor: 'Lemon Blossom & Wild Lavender Curd',
        inscription: 'Bon Voyage!',
        glutenFriendly: false,
        unitPrice: 75,
        quantity: 1,
      },
    ],
    subtotal: 75,
    tax: 6.19,
    deliveryFee: 0,
    total: 81.19,
    status: 'New',
    createdAt: '2026-10-22T08:00:00Z',
    paymentMethod: 'Amex •••• 3004',
  },
];

const INITIAL_INQUIRIES: StudioInquiry[] = [
  {
    id: 'INQ-104',
    name: 'Jessica Albright',
    email: 'jess.albright@icloud.com',
    phone: '(512) 490-3321',
    eventType: 'Wedding',
    eventDate: '2026-12-05',
    servingsCount: '120 Guests',
    stylePalette: 'Terracotta, Ivory, and dried Texas wildflowers',
    inspirationDetails: 'Saw your Instagram post with textured rice paper sails and pressed edible florals. Looking for a modern artistic 3-tier cake.',
    budgetRange: '$500 - $800',
    dietaryRequirements: 'Top tier gluten-free for bride',
    deliveryLocation: 'The Addison Grove, Austin, TX',
    createdAt: '2026-10-21T18:20:00Z',
    status: 'In Discussion',
  },
  {
    id: 'INQ-103',
    name: 'David & Rachel Miller',
    email: 'miller.rachel@gmail.com',
    phone: '(512) 678-9012',
    eventType: 'Anniversary',
    eventDate: '2026-11-20',
    servingsCount: '35 Guests',
    stylePalette: 'Gold leaf, dark chocolate drip, deep espresso tones',
    inspirationDetails: '25th Wedding Anniversary celebration in Leander. Would love personalized sugar calligraphy.',
    budgetRange: '$200 - $350',
    dietaryRequirements: 'Nut-free facility requested',
    deliveryLocation: 'Private Residence, Leander, TX',
    createdAt: '2026-10-20T11:45:00Z',
    status: 'Booked',
  },
];

export const getStoredOrders = (): StudioOrder[] => {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) {
      localStorage.setItem(ORDERS_KEY, JSON.stringify(INITIAL_ORDERS));
      return INITIAL_ORDERS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_ORDERS;
  }
};

export const saveNewOrder = (order: Omit<StudioOrder, 'createdAt' | 'status'>): StudioOrder => {
  const fullOrder: StudioOrder = {
    ...order,
    status: 'New',
    createdAt: new Date().toISOString(),
  };

  try {
    const current = getStoredOrders();
    const updated = [fullOrder, ...current];
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save order to localStorage:', err);
  }

  return fullOrder;
};

export const updateOrderStatus = (orderId: string, status: StudioOrder['status']) => {
  try {
    const current = getStoredOrders();
    const updated = current.map((ord) => (ord.id === orderId ? { ...ord, status } : ord));
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update order status:', err);
  }
};

export const deleteOrder = (orderId: string) => {
  try {
    const current = getStoredOrders();
    const updated = current.filter((ord) => ord.id !== orderId);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete order:', err);
  }
};

export const getStoredInquiries = (): StudioInquiry[] => {
  try {
    const raw = localStorage.getItem(INQUIRIES_KEY);
    if (!raw) {
      localStorage.setItem(INQUIRIES_KEY, JSON.stringify(INITIAL_INQUIRIES));
      return INITIAL_INQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_INQUIRIES;
  }
};

export const saveNewInquiry = (inquiry: Omit<StudioInquiry, 'id' | 'createdAt' | 'status'>): StudioInquiry => {
  const fullInquiry: StudioInquiry = {
    ...inquiry,
    id: `INQ-${Math.floor(100 + Math.random() * 900)}`,
    createdAt: new Date().toISOString(),
    status: 'Unread',
  };

  try {
    const current = getStoredInquiries();
    const updated = [fullInquiry, ...current];
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save inquiry to localStorage:', err);
  }

  return fullInquiry;
};

export const updateInquiryStatus = (inquiryId: string, status: StudioInquiry['status']) => {
  try {
    const current = getStoredInquiries();
    const updated = current.map((inq) => (inq.id === inquiryId ? { ...inq, status } : inq));
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update inquiry status:', err);
  }
};
