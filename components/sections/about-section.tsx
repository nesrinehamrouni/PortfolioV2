import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Digital Identity</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
      </div>

      {/* Bio */}
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
        I’m Nesrine Hamrouni, a Junior Software Engineer based in Tunisia. Passionate about creating smart, user-friendly digital solutions, I love blending creativity and problem-solving to bring ideas to life.
        </p>
        <p>
        As a freshly graduated engineer from the National School of Engineers of Carthage, I’ve built a strong foundation in software engineering and gained hands-on experience through diverse academic and professional projects.
        </p>
      </div>

      {/* Certifications & Languages */}
      <div className="space-y-8">
        <h3 className="font-playfair text-2xl font-semibold text-foreground mb-8">
          Certifications & Languages
        </h3>
        
        {/* Certifications */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            Professional Certifications
          </h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold">AWS</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">AWS Academy Cloud Foundation</div>
                  <div className="text-sm text-muted-foreground">Cloud Computing Certificate</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Certified
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold">B2</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">TOEIC B2 Level</div>
                  <div className="text-sm text-muted-foreground">English Proficiency Certification</div>
                </div>
              </div>
              <div className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                Advanced
              </div>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            Languages
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Arabic", level: "Native" },
              { name: "French", level: "Fluent" },
              { name: "English", level: "Advanced" },
              { name: "Turkish", level: "Fluent Speaker" },
              { name: "Spanish", level: "Beginner" }
            ].map((language, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full hover:bg-accent/5 transition-colors">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium text-foreground">{language.name}</span>
                <span className="text-xs text-muted-foreground">({language.level})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
