import { check } from '../../../src/services/PalindromeService'

const examples = [
  'A la catalana banal, atácala.',
  'A mamá, Roma le aviva el amor a papá y a papá, Roma le aviva el amor a Mamá.',
  'Arriba la birra.',
  'A ti no, bonita.',
  'Adivina ya te opina, ya ni miles origina, ya ni cetro me domina, ya ni monarcas, a repaso ni mulato carreta, acaso nicotina, ya ni cita vecino, anima cocina, pedazo gallina, cedazo terso nos retoza de canilla goza, de pánico camina, ónice vaticina, ya ni tocino saca, a terracota luminosa pera, sacra nómina y ánimo de mortecina, ya ni giros elimina, ya ni poeta, ya ni vida',
  'Ají traga la lagartija',
  'Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla.',
  'Allí si María avisa y así va a ir a mi silla.',
  'Allí va Ramón y no maravilla.',
  'Allí ves a Sevilla.',
  'Amad a la dama.',
  'Aman a Panamá',
  'Amar da drama.',
  'Amigo, no gima.',
  'A mi loca Colima.',
  'Amo la pacífica Paloma.',
  'Amor a Roma.',
  'Ana lava lana.',
  'Ana lleva al oso la avellana',
  'Anita lava la tina.',
  'Anula la Luna.',
  'Añora la roña.',
  'Arriba la birra',
  'Átale, demoníaco Caín, o me delata',
  'Atar a la rata.',
  'Ateo poco poeta.',
  'Ateo por Arabia iba raro poeta.',
  'Dábale arroz a la zorra el abad.',
  'El bar es imán o zona miserable',
  'Ella te da detalle.',
  'Eva, ya hay ave.',
  'Isaac no ronca así.',
  'La ruta nos aportó otro paso natural.',
  'Las Nemocón no comen sal.',
  'La tele letal.',
  'Lo sé, Dama de Sol.',
  'Logré ver gol',
  'Luz azul.',
  'Más arroz a la zorra, Sam',
  'Nada, yo soy Adán',
  'No di mi decoro, cedí mi don.',
  'No lata, no: la totalidad arada dilato talón a talón.',
  'No lo cases a Colón.',
  'No Mara, sometamos o matemos a Ramón.',
  'No traces en ese cartón',
  'Oirás orar a Rosario.',
  'Roma ni se conoce sin oro, ni se conoce sin amor.',
  'Se van sus naves.',
  'Sometamos o matemos.',
  '¿Son mulas o cívicos alumnos?.',
  'Yo le até la paleta, Eloy',
  'Yo soy.',
  'Ojo; ese oso, ese; ojo.',
  'Oso baboso.',
  'Elenita si roba Boris atínele',
  'Amo la paloma'
]

it('should return true when receive a numeric palindrome', () => {
  const result = check('181')
  expect(result).toBe(true)
})

it('should return false when receive a numeric not palindrome', () => {
  const result = check('180')
  expect(result).toBe(false)
})

it('should return true when receive a world palindrome', () => {
  const result = check('sadas')
  expect(result).toBe(true)
})

it('should return false when receive a world palindrome', () => {
  const result = check('sadasddd')
  expect(result).toBe(false)
})

examples.forEach(world => {
  it('should return true to check the world ' + world, () => {
    const result = check(world)
    expect(result).toBe(true)
  })
})