const db = require('../models');
const Users = db.users;

const Sessions = db.sessions;

const Organizations = db.organizations;

const SessionsData = [
  {
    date: new Date('2023-10-01T10:00:00Z'),

    title: 'Counseling Session - Aydeen',

    time: new Date('2023-10-01T10:00:00Z'),

    recording_link: 'https://example.com/recording/1',

    session_details: 'Discussed academic goals and challenges.',

    action_items: 'Complete the SAT practice test.',

    prep_summary: 'Reviewed previous session notes.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    date: new Date('2023-10-02T14:00:00Z'),

    title: 'SAT Session - Jule',

    time: new Date('2023-10-02T14:00:00Z'),

    recording_link: 'https://example.com/recording/2',

    session_details: 'Focused on math section strategies.',

    action_items: 'Practice algebra problems.',

    prep_summary: 'Reviewed math formulas.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    date: new Date('2023-10-03T09:00:00Z'),

    title: 'Career Guidance - Aydeen',

    time: new Date('2023-10-03T09:00:00Z'),

    recording_link: 'https://example.com/recording/3',

    session_details: 'Explored career interests.',

    action_items: 'Research potential career paths.',

    prep_summary: 'Analyzed personality test results.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'Bright Future Counseling',
  },

  {
    name: 'Guidance Gurus',
  },

  {
    name: 'Pathway Mentors',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }
}

async function associateSessionWithCounselor() {
  const relatedCounselor0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session0 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Session0?.setCounselor) {
    await Session0.setCounselor(relatedCounselor0);
  }

  const relatedCounselor1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session1 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Session1?.setCounselor) {
    await Session1.setCounselor(relatedCounselor1);
  }

  const relatedCounselor2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session2 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Session2?.setCounselor) {
    await Session2.setCounselor(relatedCounselor2);
  }
}

async function associateSessionWithStudent() {
  const relatedStudent0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session0 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Session0?.setStudent) {
    await Session0.setStudent(relatedStudent0);
  }

  const relatedStudent1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session1 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Session1?.setStudent) {
    await Session1.setStudent(relatedStudent1);
  }

  const relatedStudent2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Session2 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Session2?.setStudent) {
    await Session2.setStudent(relatedStudent2);
  }
}

async function associateSessionWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Session0 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Session0?.setOrganization) {
    await Session0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Session1 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Session1?.setOrganization) {
    await Session1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Session2 = await Sessions.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Session2?.setOrganization) {
    await Session2.setOrganization(relatedOrganization2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Sessions.bulkCreate(SessionsData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateSessionWithCounselor(),

      await associateSessionWithStudent(),

      await associateSessionWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sessions', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
