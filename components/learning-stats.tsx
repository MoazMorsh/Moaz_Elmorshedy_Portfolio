import { Card, CardContent } from "@/components/ui/card"

export default function LearningStats() {
  return (
    <div className="mt-24 mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        I Turned <span className="text-primary">200+ Hours</span> of Learning into Real-World Dashboards —
      </h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        and Shared it with <span className="text-primary">1,000+ LinkedIn Followers</span>
      </h2>

      <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
        My journey of continuous learning through online platforms and YouTube resources
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold mb-2 text-primary">200+</h3>
            <p className="text-foreground/80">Learning Hours</p>
          </CardContent>
        </Card>

        <Card className="border border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold mb-2 text-primary">30+</h3>
            <p className="text-foreground/80">Completed Courses</p>
          </CardContent>
        </Card>

        <Card className="border border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold mb-2 text-primary">1,000+</h3>
            <p className="text-foreground/80">LinkedIn Followers</p>
          </CardContent>
        </Card>

        <Card className="border border-border hover:border-primary/50 transition-colors">
          <CardContent className="p-6 text-center">
            <h3 className="text-4xl font-bold mb-2 text-primary">10+</h3>
            <p className="text-foreground/80">Real-World Projects</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
