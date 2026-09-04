import React from 'react';
import { WORKFLOW_STEPS } from '../data/content';
import { MessageSquare, FileText, Code2, Rocket } from 'lucide-react';

export const Workflow: React.FC = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-blue-400" />,
    <FileText className="w-5 h-5 text-indigo-400" />,
    <Code2 className="w-5 h-5 text-sky-400" />,
    <Rocket className="w-5 h-5 text-emerald-400" />
  ];

  return (
    <section id="ablauf" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 font-semibold text-xs tracking-wider uppercase">
            In 4 Schritten online
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4">
            So einfach entsteht deine Website.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Ein klarer, transparenter Prozess ohne bürokratische Umwege.
          </p>
        </div>

        {/* 4 Steps Grid with connector style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/70 hover:border-zinc-700/80 transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                    {stepIcons[index]}
                  </div>
                  <span className="text-3xl font-extrabold text-zinc-700 font-display group-hover:text-blue-500/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-blue-400/90 mb-3">
                  {step.description}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Phase {step.step} von 04</span>
                <span className="w-2 h-2 rounded-full bg-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
