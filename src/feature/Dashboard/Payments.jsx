import React, { useState } from 'react';
import { CreditCard, Wallet, Landmark, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function PaymentScreen() {
  const [activeTab, setActiveTab] = useState('card');
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 antialiased text-slate-800">
      <div className="w-full max-w-4xl bg-[#faf8f7] rounded-3xl p-8 relative shadow-sm">
        
        {/* Close Button */}
        <button className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors">
          <X className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Complete Your Payment</h1>
          <p className="text-xs text-gray-500 mt-1">Secure and encrypted payment processing</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Payment Method (Takes up 2/3 space) */}
          <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <h2 className="font-medium text-sm text-slate-900">Payment Method</h2>
            <p className="text-xs text-gray-400 mt-0.5">Choose your preferred payment method</p>

            {/* Tabs */}
            <div className="flex gap-8 mt-6 border-b border-gray-100 pb-3">
              <button 
                onClick={() => setActiveTab('card')}
                className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                  activeTab === 'card' 
                    ? 'border-[#800a1d] text-[#800a1d]' 
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Card
              </button>
              <button 
                onClick={() => setActiveTab('wallet')}
                className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                  activeTab === 'wallet' 
                    ? 'border-[#800a1d] text-[#800a1d]' 
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <Wallet className="w-4 h-4" />
                Wallet
              </button>
              <button 
                onClick={() => setActiveTab('bank')}
                className={`flex items-center gap-2 text-xs font-medium pb-3 -mb-[13px] border-b-2 transition-all ${
                  activeTab === 'bank' 
                    ? 'border-[#800a1d] text-[#800a1d]' 
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                <Landmark className="w-4 h-4" />
                Bank
              </button>
            </div>

            {/* Form Fields */}
            {activeTab === 'card' && (
              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium text-slate-900 mb-1.5">Card Number</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="1234 5678 9012 3456" 
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                    />
                    <CreditCard className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-900 mb-1.5">Cardholder Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-1.5">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-1.5">CVV</label>
                    <input 
                      type="password" 
                      maxLength={3}
                      placeholder="123" 
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:border-gray-400"
                    />
                  </div>
                </div>

                <button onClick={()=>navigate("/payment-success")} type="submit" className="w-full bg-[#800a1d] hover:bg-[#6b0818] text-white font-medium rounded-xl py-3 text-sm mt-4 transition-colors">
                  Pay Now
                </button>
              </form>
            )}

            {/* Placeholder state for other tabs */}
            {activeTab !== 'card' && (
              <div className="h-48 flex items-center justify-center text-sm text-gray-400 italic">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} payment integration goes here.
              </div>
            )}
          </div>

          {/* Right Column: Order Summary & Mini-Footer */}
          <div className="space-y-6">
            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="font-medium text-sm text-slate-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">₹199.00</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Cashback</span>
                  <span className="font-semibold text-[#12b76a]">-₹9.90</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span className="font-semibold text-slate-800">₹9.90</span>
                </div>
                
                <hr className="border-gray-100 my-2" />
                
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm font-medium text-slate-900">Total</span>
                  <span className="text-lg font-bold text-[#800a1d]">₹208.90</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-gray-50 text-[10px] text-gray-500 font-medium">
                <div className="flex items-center gap-1">
                  <span className="text-[#12b76a] text-xs">✓</span> 100% Secure Payments
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[#12b76a] text-xs">⚡</span> Instant Recharge
                </div>
              </div>
            </div>

            {/* Accepted Methods Mini Footer */}
            <div className="flex items-center justify-center md:justify-start gap-2 px-2">
              <span className="text-[11px] text-gray-500 font-medium mr-1">We accept:</span>
              <div className="flex gap-1.5">
                <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm">
                  <CreditCard className="w-3.5 h-3.5" />
                </div>
                <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm">
                  <Wallet className="w-3.5 h-3.5" />
                </div>
                <div className="p-1.5 bg-white border border-gray-100 rounded-md text-[#800a1d] shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}