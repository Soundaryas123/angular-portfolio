export class Tag {
  static readonly ANGULAR = new Tag("Angular", 'light blue')
  static readonly REACT = new Tag("React", 'light green')
  static readonly HTML5 = new Tag("HTML5", 'pink')
  static readonly CSS3 = new Tag("CSS3", 'green')
  static readonly JAVASCRIPT = new Tag("Javascript", 'orange')
  static readonly TYPESCRIPT = new Tag("Typescript", 'silver')
  static readonly BOOTSTRAP = new Tag("Bootstrap", 'purple')
  static readonly ANGULARMATERIAL = new Tag("Angular material", 'gold')
  static readonly TAILWIND = new Tag("Tailwind", 'blue')
  static readonly SCSS = new Tag("SCSS", 'violet')

  private constructor(private readonly key: string, public readonly color: string) {

  }
 private toString() {
    return this.key
  }
}