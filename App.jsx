import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  Activity, Bell, ChevronDown, CircleHelp, Clock3, Crown, FolderOpen,
  Home, Image, LayoutTemplate, LogOut, Menu, Palette, Plus, Search,
  Settings, Sparkles, Upload, Wallet, X
} from "lucide-react";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import StudioPlaceholder from "./pages/StudioPlaceholder";

const navGroups = [
  {
    label: "WORKSPACE",
    links: [
      { to: "/", label: "Dashboard", icon: Home, end: true },
      { to: "/design", label: "Design Studio", icon: Palette },
      { to: "/ai-studio", label: "AI Studio", icon: Sparkles },
      { to: "/templates", label: "Templates", icon: LayoutTemplate }
    ]
  },
  {
    label: "YOUR LIBRARY",
    links: [
      { to: "/projects", label: "My Projects", icon: FolderOpen },
      { to: "/uploads", label: "My Uploads", icon: Upload }
    ]
  },
  {
    label: "ACCOUNT",
    links: [
      { to: "/credits", label: "Credits Wallet", icon: Wallet },
      { to: "/activity", label: "Activity", icon: Activity },
      { to: "/settings", label: "Settings", icon: Settings }
    ]
  }
];

function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <button className="mobile-scrim" aria-label="Close menu" onClick={onClose} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark">N</div>
          <div><strong>NEXUS</strong><span>CREATIVE STUDIO</span></div>
          <button className="icon-button sidebar-close" onClick={onClose} aria-label="Close menu"><X size={18}/></button>
        </div>
        <button className="new-design" onClick={() => window.location.href = "/design"}>
          <Plus size={18}/> Create a design
        </button>
        <nav>
          {navGroups.map(group => (
            <section className="nav-group" key={group.label}>
              <p className="nav-heading">{group.label}</p>
              {group.links.map(item => {
                const Icon = item.icon;
                return (
                  <NavLink key={item.to} to={item.to} end={item.end} onClick={onClose}
                    className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    <Icon size={18}/><span>{item.label}</span>
                  </NavLink>
                );
              })}
            </section>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="help-card">
            <div className="help-icon"><CircleHelp size={17}/></div>
            <strong>Need a hand?</strong>
            <p>Explore guides to get started.</p>
            <span>Help center <span aria-hidden="true">↗</span></span>
          </div>
          <div className="sidebar-footer">NEXUS CREATIVE STUDIO <span>FOUNDATION 01</span></div>
        </div>
      </aside>
    </>
  );
}

function Header({ onMenu }) {
  return (
    <header className="topbar">
      <button className="icon-button menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={21}/></button>
      <div className="breadcrumb"><span>Workspace</span><b>/</b><strong>Overview</strong></div>
      <div className="top-actions">
        <label className="search-box"><Search size={16}/><input placeholder="Search projects..." aria-label="Search projects"/></label>
        <button className="credit-chip" onClick={() => window.location.href = "/credits"}><Wallet size={16}/><strong>0</strong><span>Credits</span></button>
        <button className="icon-button notification-button" aria-label="Notifications"><Bell size={19}/><i/></button>
        <button className="avatar" aria-label="Profile menu">N</button>
      </div>
    </header>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const titles = {
    "/": "Overview", "/design": "Design Studio", "/ai-studio": "AI Studio",
    "/templates": "Templates", "/projects": "My Projects", "/uploads": "My Uploads",
    "/credits": "Credits Wallet", "/activity": "Activity", "/settings": "Settings"
  };
  const title = titles[location.pathname] || "Workspace";

  return (
    <div className="app-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)}/>
      <main className="main-area">
        <Header onMenu={() => setMenuOpen(true)}/>
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="*" element={<StudioPlaceholder title={title}/>}/>
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return <AppShell/>;
}
