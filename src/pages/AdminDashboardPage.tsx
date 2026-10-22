import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  DollarSign,
  Calendar,
  CheckCircle,
  Truck,
  Store,
  MapPin,
  Trash2,
  FileText,
  Printer,
  ChevronRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Search,
} from 'lucide-react';
import {
  getStoredOrders,
  getStoredInquiries,
  updateOrderStatus,
  deleteOrder,
  updateInquiryStatus,
  type StudioOrder,
  type StudioInquiry,
} from '../services/ordersStorage';
import { SEOHead } from '../components/SEOHead';

export const AdminDashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<StudioOrder[]>([]);
  const [inquiries, setInquiries] = useState<StudioInquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'orders' | 'inquiries'>('orders');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<StudioOrder | null>(null);

  const loadData = () => {
    setOrders(getStoredOrders());
    setInquiries(getStoredInquiries());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = (orderId: string, newStatus: StudioOrder['status']) => {
    updateOrderStatus(orderId, newStatus);
    loadData();
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const handleDelete = (orderId: string) => {
    if (window.confirm(`Delete order ${orderId}?`)) {
      deleteOrder(orderId);
      loadData();
      if (selectedOrder?.id === orderId) {
        setSelectedOrder(null);
      }
    }
  };

  const handleInquiryStatusChange = (inquiryId: string, newStatus: StudioInquiry['status']) => {
    updateInquiryStatus(inquiryId, newStatus);
    loadData();
  };

  // KPIs
  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const activeOrdersCount = orders.filter(
    (o) => o.status === 'New' || o.status === 'In Production' || o.status === 'Ready for Pickup'
  ).length;
  const newInquiriesCount = inquiries.filter((i) => i.status === 'Unread').length;

  // Filtered orders
  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === 'All' || o.status === statusFilter;
    const matchesSearch =
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerPhone.includes(searchQuery) ||
      o.items.some((it) => it.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: StudioOrder['status']) => {
    switch (status) {
      case 'New':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'In Production':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Ready for Pickup':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Delivered':
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F7FAF9] text-espresso-900 pb-16">
      <SEOHead
        title="Studio Admin & Orders Portal — The Austin Cakery"
        description="Private administrative portal for managing incoming custom cake orders, celebration dates, customer invoices, and bespoke event inquiries."
      />

      {/* Admin Top Bar */}
      <div className="bg-[#183637] text-white py-3.5 px-4 sm:px-8 border-b border-aqua-800">
        <div className="max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-aqua-400 to-rosegold-400 flex-shrink-0">
              <img
                src="/images/the-austin-cakery-logo.png"
                alt="The Austin Cakery"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg tracking-wider uppercase font-medium">
                  The Austin Cakery
                </span>
                <span className="bg-rosegold-600/80 text-white text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-mono">
                  Owner Admin Portal
                </span>
              </div>
              <span className="text-[10px] text-aqua-200 tracking-wider uppercase font-light">
                Serving Austin &amp; Leander, Texas &bull; Niloufer Y. Khatri
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2.5 text-xs">
            <button
              onClick={loadData}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-aqua-900/60 hover:bg-aqua-800 border border-aqua-700/60 text-aqua-100 transition-colors cursor-pointer"
              title="Refresh local storage orders"
            >
              <RefreshCw className="w-3.5 h-3.5 text-rosegold-300" />
              <span>Refresh</span>
            </button>
            <Link
              to="/"
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded bg-rosegold-600 hover:bg-rosegold-700 text-white font-medium transition-colors"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 py-6 space-y-6">
        
        {/* Production Architecture Banner */}
        <div className="bg-white p-4 rounded-sm border border-aqua-200/90 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-espresso-700">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-aqua-700 flex-shrink-0" />
            <div>
              <span className="font-semibold text-espresso-900 block">
                Order &amp; Payment Processing Architecture
              </span>
              <span className="text-[11px] text-espresso-600 font-light">
                In full production, payments route directly to Stripe / Square / Clover into Niloufer’s Austin business bank account. Notifications send to email &amp; WhatsApp automatically.
              </span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono text-[10px] uppercase tracking-wider flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Live Client Storage Mode
          </span>
        </div>

        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-sm border border-aqua-200 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
                Total Revenue
              </span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-serif text-2xl lg:text-3xl text-espresso-900 font-semibold mt-1">
              ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <span className="text-[10px] text-emerald-600 font-medium mt-1 block">
              Direct custom studio sales
            </span>
          </div>

          <div className="bg-white p-4 rounded-sm border border-aqua-200 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
                Active Cake Orders
              </span>
              <ShoppingBag className="w-4 h-4 text-rosegold-600" />
            </div>
            <div className="font-serif text-2xl lg:text-3xl text-espresso-900 font-semibold mt-1">
              {activeOrdersCount}
            </div>
            <span className="text-[10px] text-rosegold-600 font-medium mt-1 block">
              In baking / Ready for pickup
            </span>
          </div>

          <div className="bg-white p-4 rounded-sm border border-aqua-200 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
                Total Orders Placed
              </span>
              <CheckCircle className="w-4 h-4 text-aqua-600" />
            </div>
            <div className="font-serif text-2xl lg:text-3xl text-espresso-900 font-semibold mt-1">
              {orders.length}
            </div>
            <span className="text-[10px] text-aqua-700 font-medium mt-1 block">
              Lifetime studio orders
            </span>
          </div>

          <div className="bg-white p-4 rounded-sm border border-aqua-200 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-espresso-600 font-medium">
                Pending Inquiries
              </span>
              <Calendar className="w-4 h-4 text-amber-600" />
            </div>
            <div className="font-serif text-2xl lg:text-3xl text-espresso-900 font-semibold mt-1">
              {newInquiriesCount}
            </div>
            <span className="text-[10px] text-amber-600 font-medium mt-1 block">
              Awaiting consultation &amp; quote
            </span>
          </div>
        </div>

        {/* Tab Selector: Orders vs. Inquiries */}
        <div className="border-b border-aqua-200 flex items-center justify-between gap-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-3 px-4 font-serif text-base sm:text-lg border-b-2 font-medium transition-colors cursor-pointer flex items-center space-x-2 ${
                activeTab === 'orders'
                  ? 'border-rosegold-600 text-rosegold-700'
                  : 'border-transparent text-espresso-600 hover:text-espresso-900'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cake Orders &amp; Checkout ({orders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('inquiries')}
              className={`pb-3 px-4 font-serif text-base sm:text-lg border-b-2 font-medium transition-colors cursor-pointer flex items-center space-x-2 ${
                activeTab === 'inquiries'
                  ? 'border-rosegold-600 text-rosegold-700'
                  : 'border-transparent text-espresso-600 hover:text-espresso-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Custom Inquiries ({inquiries.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ORDERS & PAYMENTS */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            
            {/* Filter Bar */}
            <div className="bg-white p-3.5 rounded-sm border border-aqua-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2 flex-1 min-w-[200px] max-w-md">
                <Search className="w-4 h-4 text-espresso-400" />
                <input
                  type="text"
                  placeholder="Search by order #, client name, phone, or cake..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs text-espresso-900 placeholder:text-espresso-400 bg-transparent focus:outline-none"
                />
              </div>

              <div className="flex items-center space-x-2 text-xs">
                <span className="text-espresso-600 font-light">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-[#FAFDFC] border border-aqua-200 text-espresso-800 text-xs rounded px-2.5 py-1 focus:ring-1 focus:ring-rosegold-400 focus:outline-none"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="In Production">In Production</option>
                  <option value="Ready for Pickup">Ready for Pickup</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-sm border border-aqua-200 shadow-soft overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F0FAF9] text-espresso-800 border-b border-aqua-200 uppercase tracking-wider text-[10px] font-semibold">
                    <th className="py-3 px-4">Order #</th>
                    <th className="py-3 px-4">Client Contact</th>
                    <th className="py-3 px-4">Target Date</th>
                    <th className="py-3 px-4">Fulfillment</th>
                    <th className="py-3 px-4">Cake Items</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-aqua-100 font-light">
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-12 text-center text-espresso-500">
                        No orders match the current filter.
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((ord) => (
                      <tr key={ord.id} className="hover:bg-aqua-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-mono font-bold text-rosegold-700 whitespace-nowrap">
                          {ord.id}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="font-medium text-espresso-900">{ord.customerName}</div>
                          <div className="text-[11px] text-espresso-600 flex items-center space-x-2 mt-0.5">
                            <span>{ord.customerPhone}</span>
                            <span>&bull;</span>
                            <span className="truncate max-w-[140px]">{ord.customerEmail}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <div className="flex items-center space-x-1.5 text-espresso-900 font-medium">
                            <Calendar className="w-3.5 h-3.5 text-rosegold-500" />
                            <span>{ord.eventDate}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {ord.fulfillment === 'pickup' ? (
                            <span className="inline-flex items-center gap-1 text-aqua-900 bg-aqua-50 border border-aqua-200 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                              <Store className="w-3 h-3 text-aqua-600" /> Pickup (Austin/Leander)
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-rosegold-900 bg-rosegold-50 border border-rosegold-200 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider" title={ord.deliveryAddress}>
                              <Truck className="w-3 h-3 text-rosegold-600" /> Delivery
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          {ord.items.map((it, idx) => (
                            <div key={idx} className="text-xs">
                              <span className="font-medium text-espresso-900">
                                {it.quantity}x {it.title}
                              </span>
                              <div className="text-[10px] text-espresso-600">
                                {it.size} &bull; {it.flavor}
                                {it.inscription && (
                                  <span className="italic block text-rosegold-700">
                                    Inscription: “{it.inscription}”
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </td>
                        <td className="py-3.5 px-4 font-serif text-sm font-semibold text-espresso-900 whitespace-nowrap">
                          ${ord.total.toFixed(2)}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <select
                            value={ord.status}
                            onChange={(e) => handleStatusChange(ord.id, e.target.value as StudioOrder['status'])}
                            className={`border text-[10px] uppercase tracking-wider font-semibold rounded px-2 py-1 cursor-pointer focus:outline-none ${getStatusBadge(
                              ord.status
                            )}`}
                          >
                            <option value="New">New</option>
                            <option value="In Production">In Production</option>
                            <option value="Ready for Pickup">Ready for Pickup</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => setSelectedOrder(ord)}
                              className="p-1.5 rounded hover:bg-aqua-100 text-aqua-800 transition-colors"
                              title="View Work Order / Print Ticket"
                            >
                              <FileText className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(ord.id)}
                              className="p-1.5 rounded hover:bg-red-50 text-red-600 transition-colors"
                              title="Delete Order"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 2: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-white p-5 rounded-sm border border-aqua-200 shadow-soft space-y-3.5 text-left"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-rosegold-600 block">
                        {inq.id} &bull; {inq.eventType}
                      </span>
                      <h3 className="font-serif text-lg text-espresso-900 font-medium">
                        {inq.name}
                      </h3>
                    </div>

                    <select
                      value={inq.status}
                      onChange={(e) => handleInquiryStatusChange(inq.id, e.target.value as StudioInquiry['status'])}
                      className="border border-aqua-200 bg-aqua-50/60 text-[10px] uppercase tracking-wider text-aqua-900 rounded px-2 py-0.5 font-semibold focus:outline-none"
                    >
                      <option value="Unread">Unread</option>
                      <option value="In Discussion">In Discussion</option>
                      <option value="Quoted">Quoted</option>
                      <option value="Booked">Booked</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-espresso-700 bg-[#FAFDFC] p-3 rounded border border-aqua-100">
                    <div>
                      <span className="text-[10px] uppercase text-espresso-400 block">Event Date:</span>
                      <span className="font-medium text-espresso-900">{inq.eventDate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-espresso-400 block">Guest Count:</span>
                      <span className="font-medium text-espresso-900">{inq.servingsCount || 'TBD'}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-espresso-400 block">Phone:</span>
                      <span>{inq.phone}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-espresso-400 block">Email:</span>
                      <span className="truncate block">{inq.email}</span>
                    </div>
                  </div>

                  {inq.stylePalette && (
                    <div className="text-xs">
                      <span className="text-[10px] uppercase text-rosegold-600 font-semibold block">Style / Palette:</span>
                      <p className="text-espresso-700 font-light mt-0.5">{inq.stylePalette}</p>
                    </div>
                  )}

                  {inq.inspirationDetails && (
                    <div className="text-xs">
                      <span className="text-[10px] uppercase text-aqua-700 font-semibold block">Inspiration Details:</span>
                      <p className="text-espresso-700 font-light mt-0.5 bg-aqua-50/40 p-2 rounded">
                        {inq.inspirationDetails}
                      </p>
                    </div>
                  )}

                  <div className="pt-2 border-t border-aqua-100 flex items-center justify-between text-[11px] text-espresso-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rosegold-500" />
                      {inq.deliveryLocation}
                    </span>
                    <a
                      href={`mailto:${inq.email}?subject=The Austin Cakery — Your Custom Cake Inquiry (${inq.eventType})`}
                      className="text-rosegold-600 hover:text-rosegold-700 font-medium uppercase tracking-wider inline-flex items-center space-x-1"
                    >
                      <span>Reply to Client</span>
                      <ChevronRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Production Slip / Work Order Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-sm shadow-modal border border-aqua-200 overflow-hidden text-left">
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between border-b border-aqua-100 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-rosegold-600 font-semibold block">
                    Kitchen Work Order
                  </span>
                  <h3 className="font-serif text-2xl text-espresso-900 font-medium">
                    Order #{selectedOrder.id}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="p-1 rounded text-espresso-600 hover:text-espresso-900"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-2 text-xs text-espresso-700">
                <div className="flex justify-between">
                  <span className="font-semibold text-espresso-900">Celebration Date:</span>
                  <span className="font-bold text-rosegold-700">{selectedOrder.eventDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-espresso-900">Customer:</span>
                  <span>{selectedOrder.customerName} ({selectedOrder.customerPhone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-espresso-900">Fulfillment:</span>
                  <span>{selectedOrder.fulfillment === 'pickup' ? 'Studio Pickup' : `Delivery to ${selectedOrder.deliveryAddress}`}</span>
                </div>
              </div>

              <div className="border-t border-b border-aqua-100 py-3 space-y-3">
                <div className="text-[10px] uppercase tracking-widest text-espresso-500 font-bold">
                  Items to Bake &amp; Decorate
                </div>
                {selectedOrder.items.map((it, idx) => (
                  <div key={idx} className="bg-aqua-50/50 p-2.5 rounded border border-aqua-100 text-xs space-y-1">
                    <div className="font-bold text-espresso-900 flex justify-between">
                      <span>{it.quantity}x {it.title}</span>
                      <span>${it.unitPrice * it.quantity}</span>
                    </div>
                    <div className="text-[11px] text-espresso-700">Size: {it.size}</div>
                    <div className="text-[11px] text-espresso-700">Flavor: {it.flavor}</div>
                    {it.inscription && (
                      <div className="text-[11px] text-rosegold-800 font-serif italic">
                        Inscription on cake: “{it.inscription}”
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="text-xs text-espresso-600">
                  Total Paid: <span className="font-serif font-bold text-base text-espresso-900">${selectedOrder.total.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded bg-rosegold-600 hover:bg-rosegold-700 text-white text-xs uppercase tracking-wider font-medium cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Kitchen Slip</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
