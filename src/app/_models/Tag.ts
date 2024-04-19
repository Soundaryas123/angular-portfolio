export class Tag {
    static readonly ANGULAR = new Tag("Angular", 'red')
  static readonly REACTJS = new Tag("Reactjs", 'darkred')
  static readonly HTML5 = new Tag("HTML5", 'pink')
  static readonly CSS3 = new Tag("CSS3", 'green')
  static readonly JAVASCRIPT = new Tag("Javascript", 'orange')
  static readonly TYPESCRIPT = new Tag("Typescript", 'brown')
  static readonly BOOTSTRAP = new Tag("Bootstrap", 'purple')
  static readonly ANGULARMATERIAL = new Tag("Angular material", 'red')
  static readonly TAILWIND = new Tag("Tailwind", 'blue')
  static readonly SCSS = new Tag("SCSS", 'violet')

    private constructor(private readonly key: string, public readonly color: string) {

    }
    toString() {
        return this.key
    }
}