"use client";

import { Award, Pill, Globe, Users } from "lucide-react";

export default function StatsSection(params) {
  const stats = [
    { icon: Award, value: "26+", label: "Years of excellence" },
    { icon: Pill, value: "5k+", label: "Type of medicine" },
    { icon: Globe, value: "600+", label: "Global brands" },
    { icon: Users, value: "1M", label: "Happy customers" },
  ];
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground leading-tight">
            Your Trusted Healthcare Service Since 2009
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We believe in building lasting relationships with our patients,
            offering not just medications, but comprehensive health support that
            helps you live your best life. From prescription consultations to
            wellness screenings, we&lsquo;re here to be your trusted partner in
            health every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12  bg-primary flex items-center justify-center flex-shrink-0  rounded-lg">
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl md:text-3xl  font-bold text-foreground  font-heading text-primary  ">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-xs  ">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
