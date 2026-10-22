import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, Sparkles, MapPin } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { brandDetails } from '../data/featuresData';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="bg-[#122A2B] text-aqua-100 border-t border-aqua-900 transition-colors">
      {/* Top Editorial Banner */}
      <div className="border-b border-aqua-800/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-serif text-2xl sm:text-3xl tracking-wide text-white italic">
              “A little art, a lot of heart.”
            </p>
            <p className="text-[11px] uppercase tracking-[0.25em] text-aqua-300 font-light">
              Custom Cake Studio &bull; Austin &amp; Leander, Texas
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={brandDetails.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full border border-aqua-400/40 text-white hover:border-aqua-300 hover:bg-aqua-400/10 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-rosegold-400" />
              <span>@theaustincakery</span>
            </a>

            <a
              href={brandDetails.linktreeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.16em] px-4 py-2.5 rounded-full border border-aqua-400/40 text-white hover:border-aqua-300 hover:bg-aqua-400/10 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-aqua-300" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/inquire"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded bg-gradient-to-r from-rosegold-500 to-rosegold-600 text-white hover:from-rosegold-600 hover:to-rosegold-700 transition-colors font-medium shadow-sm"
            >
              <span>Inquire for Your Date</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3.5">
            <div className="flex items-center space-x-3">
              <img
                src="/images/the-austin-cakery-logo.png"
                alt="The Austin Cakery Logo"
                className="w-10 h-10 rounded-full object-cover border border-rosegold-300 shadow-sm"
              />
              <div>
                <h3 className="font-serif text-xl tracking-[0.15em] uppercase text-white font-medium">
                  The Austin Cakery
                </h3>
                <span className="text-[9px] uppercase tracking-widest text-rosegold-300 font-light block">
                  Custom Cake Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-aqua-100/80 leading-relaxed font-light">
              A home-based custom cake bakery celebrating life’s most cherished milestones across Austin and Leander, Texas.
            </p>
            <div className="flex items-center space-x-2 text-xs text-aqua-300">
              <MapPin className="w-3.5 h-3.5 text-rosegold-400 flex-shrink-0" />
              <span>Austin &amp; Leander, TX</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-rosegold-300 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-aqua-100/90 font-light">
              <li>
                <Link to="/" className="hover:text-rosegold-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-rosegold-300 transition-colors">
                  The Gallery
                </Link>
              </li>
              <li>
                <Link to="/weddings-celebrations" className="hover:text-rosegold-300 transition-colors">
                  Weddings &amp; Celebrations
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-rosegold-300 transition-colors">
                  Our Story &amp; Press
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-rosegold-300 transition-colors">
                  Inquiry FAQ
                </Link>
              </li>
              <li>
                <Link to="/inquire" className="hover:text-rosegold-300 transition-colors">
                  Custom Cake Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-rosegold-300 font-semibold">
              Inquiry Categories
            </h4>
            <ul className="space-y-2 text-xs text-aqua-100/90 font-light">
              <li>
                <Link to="/weddings-celebrations" className="hover:text-rosegold-300 transition-colors">
                  Tiered Wedding Cakes
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Celebrations" className="hover:text-rosegold-300 transition-colors">
                  3D Sculpted Celebration Cakes
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Floral" className="hover:text-rosegold-300 transition-colors">
                  Floral &amp; Pressed Bloom Cakes
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Artistic Details" className="hover:text-rosegold-300 transition-colors">
                  Gold Calligraphy &amp; Rumi Tiers
                </Link>
              </li>
              <li>
                <Link to="/gallery?category=Workshops" className="hover:text-rosegold-300 transition-colors">
                  Cake Decorating Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Press & Media */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.22em] text-rosegold-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-rosegold-400" /> Verified Features
            </h4>
            <p className="text-xs text-aqua-100/80 leading-relaxed font-light">
              Publicly featured in Canvas Rebel (2023), Voyage Austin, and Voyage Houston (2025).
            </p>
            <div className="pt-1">
              <a
                href={brandDetails.linktreeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-aqua-300 hover:text-white transition-colors underline underline-offset-4"
              >
                <span>View Public Features on Linktree</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Concept Notice */}
        <div className="mt-10 pt-6 border-t border-aqua-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-aqua-200/60 font-light">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} The Austin Cakery. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-center">
            <span>Website concept prepared for review</span>
            <span>&bull;</span>
            <span className="italic">Crafted with care</span>
            <Heart className="w-3 h-3 text-rosegold-400 inline mx-0.5" />
            <span>&bull;</span>
            <Link to="/admin" className="text-rosegold-300 hover:text-white underline underline-offset-2 font-medium">
              Studio Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
