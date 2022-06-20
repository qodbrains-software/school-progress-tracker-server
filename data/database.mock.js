export const database = {
  teachers: [
    {
      name: "Henry",
      surname: "Mia",
      loginId: 123456,
      role: "teacher",
      subjects: [
        {
          name: "Mathematics",
          grades: [12, 10, 11],
        },
        {
          name: "English",
          grades: [12],
        },
      ],
      classes: [
        {
          grade: 10,
          students: [
            {
              name: "Liam",
              age: 20,
              grade: 12,
              subjects: [
                {
                  name: "Mathematics",
                },
                {
                  name: "English",
                },
              ],
            },
            {
              name: "Charlotte",
              age: 21,
              grade: 12,
              subjects: [
                {
                  name: "Mathematics",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Amelia",
      surname: "Oliver",
      loginId: 654321,
      role: "Teacher",
      subjects: [
        {
          name: "Physical Sciences",
          grades: [12],
        },
        {
          name: "Life Sciences",
          grades: [12, 11, 9],
        },
      ],
      classes: [
        {
          grade: 10,
          students: [
            {
              name: "Olivia",
              age: 17,
              grade: 11,
              subjects: [
                {
                  name: "Physical Sciences",
                },
                {
                  name: "Life Sciences",
                },
              ],
            },
            {
              name: "Noah",
              age: 15,
              grade: 10,
              subjects: [
                {
                  name: "Physical Sciences",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  grades: [
    {
      grade: 9,
      classes: {
        A: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
              subjects: [
                {
                  name: "English",
                  teacher: "Amelia Oliver",
                },
                { name: "Afrikaans", teacher: "Oliver Twist" },
              ],
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        B: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        C: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
      },
    },
    {
      grade: 10,
      classes: {
        A: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        B: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        C: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
      },
    },
    {
      grade: 11,
      classes: {
        A: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        B: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        C: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
      },
    },
    {
      grade: 12,
      classes: {
        A: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        B: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
              role: "student"
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
        C: {
          students: [
            {
              id: 0,
              name: "Maldonado Cox",
            },
            {
              id: 1,
              name: "Walls Sanford",
            },
            {
              id: 2,
              name: "Sherry Flores",
            },
            {
              id: 3,
              name: "Blanca Pierce",
            },
            {
              id: 4,
              name: "Hayden Mcmillan",
            },
            {
              id: 5,
              name: "Todd Kennedy",
            },
            {
              id: 6,
              name: "Cline Mclean",
            },
            {
              id: 7,
              name: "Hines Lucas",
            },
            {
              id: 8,
              name: "Loretta Hurst",
            },
            {
              id: 9,
              name: "Peggy Boone",
            },
            {
              id: 10,
              name: "Adela Pitts",
            },
            {
              id: 11,
              name: "Jackson Stevens",
            },
            {
              id: 12,
              name: "Miller Boyer",
            },
            {
              id: 13,
              name: "Miranda Conley",
            },
            {
              id: 14,
              name: "Beulah Shepherd",
            },
          ],
        },
      },
    },
  ],
};
