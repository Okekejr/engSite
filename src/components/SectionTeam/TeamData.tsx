export interface DataT {
  [key: string]: {
    id: number
    headshot: string
    name: string
    linkedin?: string
    twitter?: string
    role: string
  }
}

export const TeamData: DataT = {
  Manuel: {
    id: 0,
    headshot:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGgfRCl54ao5Q/profile-displayphoto-shrink_400_400/0/1632295293360?e=1669852800&v=beta&t=_tpj0MyjB5DL-wrLcYCyVVph_-u6R_N-_RiIoWbIcZE",
    name: "Manuel Blanco",
    linkedin: "https://www.linkedin.com/in/manuel-blanco-appleby-2a61a157/",
    role: "Founder",
  },
  Fede: {
    id: 1,
    headshot:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGA591RyBY_nw/profile-displayphoto-shrink_400_400/0/1583890136855?e=1669852800&v=beta&t=LCCK-BUaKHYS5AO3qSzbA58rVb-Sv6Ph7K76-7025lo",
    name: "Federico Charles",
    linkedin: "https://www.linkedin.com/in/federicocharles/",
    role: "Co-Founder",
  },
  Abby: {
    id: 2,
    headshot:
      "https://media-exp1.licdn.com/dms/image/C5603AQECreKlBe9quw/profile-displayphoto-shrink_400_400/0/1652801570582?e=1669852800&v=beta&t=bQuNL4tYZwOJO8xfM7KbP-Q9_Ho99sIaYi8Ua3aISbU",
    name: "Abril Altes",
    linkedin: "https://www.linkedin.com/in/abril-alt%C3%A9s-19152640/",
    role: "Head of Operations",
  },
  Angel: {
    id: 2,
    headshot:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGpygizKlcLSA/profile-displayphoto-shrink_400_400/0/1568910336912?e=1669852800&v=beta&t=H2V-YuaIKQBXHZ0EoK_obPg9eRGHVbVsTaEdYRqnIsM",
    name: "Eduardo Angel",
    linkedin: "https://www.linkedin.com/in/eduardo-angel-563453181/",
    role: "Designer",
  },
  Carlos: {
    id: 2,
    headshot:
      "https://media-exp1.licdn.com/dms/image/D5603AQFpKPZxpEoHUA/profile-displayphoto-shrink_400_400/0/1644334668781?e=1669852800&v=beta&t=Tpw-_2wzswbasIRztuL7ed5i1Y5qkYF4MAWMmwsvzf4",
    name: "Carlos Eduardo",
    linkedin:
      "https://www.linkedin.com/in/carlos-eduardo-segovia-medina-2b8557192/",
    role: "Backend Blockchain Engineer",
  },
  Okeke: {
    id: 2,
    headshot:
      "https://media-exp1.licdn.com/dms/image/C5603AQG2mPd_pBd_rQ/profile-displayphoto-shrink_400_400/0/1662997290820?e=1669852800&v=beta&t=YykbrST5RJUSoq39TUbIzZMaX6q7T8FSuBKrcvdwesY",
    name: "Emmanuel Okeke",
    linkedin: "https://www.linkedin.com/in/emmanuel-okeke/",
    role: "Frontend Engineer | UI/UX designer",
  },
}
