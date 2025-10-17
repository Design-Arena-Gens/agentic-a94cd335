'use client'

import {
  Gauge,
  BookOpen,
  Network,
  BarChart3,
  GitBranch,
  Settings,
  ChevronDown,
  X,
  Copy,
  Diamond
} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-white">
      {/* Top Bar */}
      <div className="h-[54px] bg-primary-blue flex items-center justify-between px-6 text-white shrink-0">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-medium">AI Generated Version</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <span className="text-xs opacity-80">Changes saved</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Settings className="w-5 h-5 cursor-pointer" />
          <button className="px-4 py-1.5 bg-white text-black rounded border border-border-gray text-sm font-medium">
            Preview
          </button>
          <button className="px-4 py-1.5 bg-sidebar-dark text-white rounded text-sm font-medium">
            Save
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-[240px] bg-sidebar-dark text-gray-400 flex flex-col shrink-0">
          {/* Logo */}
          <div className="px-6 py-6">
            <div className="text-white font-bold text-sm tracking-wide">
              WORLDQUVN<br/>LEARNING
            </div>
          </div>

          {/* Primary Nav */}
          <nav className="flex-1 px-3 space-y-1">
            <NavItem icon={<Gauge className="w-5 h-5" />} label="Overview" />
            <NavItem icon={<BookOpen className="w-5 h-5" />} label="Learning Objectives" />
            <NavItem icon={<Network className="w-5 h-5" />} label="Ontology" />
            <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Source Library" />

            {/* Learning Paths Section */}
            <div className="pt-6">
              <div className="px-3 text-xs font-semibold mb-2 tracking-wide">
                LEARNING PATHS
              </div>
              <NavItem
                icon={<Network className="w-5 h-5" />}
                label="WQU Administration"
                active={true}
              />
              <NavItem icon={<GitBranch className="w-5 h-5" />} label="Intro to Python" />
              <NavItem icon={<GitBranch className="w-5 h-5" />} label="Python foundations" />

              <button className="w-full px-3 py-2 text-left text-sm flex items-center gap-2 hover:bg-sidebar-active rounded transition-colors">
                <span>+</span> New path
              </button>
            </div>

            <div className="pt-6">
              <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-medium">
              A
            </div>
            <span className="text-sm">ayhan@tap...</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Content Header */}
          <div className="h-[64px] border-b border-border-light flex items-center px-6 gap-4 shrink-0 bg-white">
            <X className="w-5 h-5 text-gray-700 cursor-pointer" />
            <h1 className="text-2xl font-bold text-black">Why Do We Code</h1>
          </div>

          {/* Content Body - Two Pane */}
          <div className="flex flex-1 overflow-hidden">
            {/* Left Inspector Pane */}
            <div className="w-[320px] bg-bg-light overflow-y-auto shrink-0">
              <div className="p-4 space-y-4">
                {/* Learning Path Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">Learning Path</h3>
                    <Copy className="w-4 h-4 text-gray-500 cursor-pointer" />
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Course</div>
                      <div className="text-sm text-black">Coding Fundamentals</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Module</div>
                      <div className="text-sm text-black">Coding Fundamentals</div>
                    </div>
                  </div>
                </div>

                {/* Learning Objectives Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">Learning Objectives</h3>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">1</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-black mb-1">
                      Understand the motivations for...
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Diamond className="w-3 h-3 text-blue-500 fill-blue-500" />
                      <span>Bloom 1 (Knowledge)</span>
                    </div>
                  </div>
                </div>

                {/* Learning Experiences Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800">Learning Experiences</h3>
                    <button className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded hover:bg-gray-200 transition-colors">
                      New +
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 rounded border border-gray-200">
                      <div className="text-sm text-black font-medium mb-1">Video Lecture</div>
                      <div className="text-xs text-gray-500">Introduction to programming</div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded border border-gray-200">
                      <div className="text-sm text-black font-medium mb-1">Reading Material</div>
                      <div className="text-xs text-gray-500">Why we write code</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Pane */}
            <div className="flex-1 bg-white overflow-y-auto p-8">
              <div className="max-w-4xl">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Course Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This learning path introduces the fundamental concepts of programming and explains
                  why coding is an essential skill in the modern world. Students will explore the
                  history of programming, understand problem-solving through code, and learn about
                  the various applications of programming across different industries.
                </p>

                <h3 className="text-lg font-bold text-gray-900 mb-3">Key Topics</h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>The history and evolution of programming languages</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Understanding computational thinking</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Real-world applications of programming</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-primary-blue mt-1">•</span>
                    <span>Career opportunities in software development</span>
                  </li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-primary-blue p-4 rounded-r">
                  <h4 className="font-bold text-gray-900 mb-2">Learning Outcome</h4>
                  <p className="text-gray-700 text-sm">
                    By the end of this module, students will have a clear understanding of why
                    programming is important and how it can be used to solve complex problems
                    across various domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon,
  label,
  active = false
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
}) {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded cursor-pointer transition-colors
        ${active
          ? 'bg-sidebar-active text-white'
          : 'text-gray-400 hover:bg-sidebar-active hover:text-white'
        }
      `}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  )
}
