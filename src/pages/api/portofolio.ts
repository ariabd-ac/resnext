export default function handler(req, res) {
  res.status(200).json({
    data: [
      {
        name: 'APEMASI Pemali Comal',
        role: 'Full Stack',
        description:
          'Create an APEMASI system to monitor the water flow in each weir, with the weir guard sending SMS to the system then the water flow will be updated, and create a dynamic weir scheme',
        url: 'https://ariabd.engineer/assets/images/pemalicomal.png',
        stack: [
          'PHP Native',
          'CSS3',
          'Bootstrap',
          'SMS Getway',
          'Javascript',
          'Jquery',
          'Github',
          'Trello',
          'Figma',
        ],
      },

      {
        name: 'POINT OF SALE (KASIR CV MULYA JAYA)',
        role: 'Full Stack',
        description:
          'Create a website application for CV cashiers. Mulya Jaya which is useful for facilitating transactions, recording in and out sales etc',
        url: 'https://ariabd.engineer/assets/images/pos.png',
        stack: [
          'PHP',
          'CI3',
          'CSS3',
          'Bootstrap',
          'SMS Getway',
          'Javascript',
          'Github',
        ],
      },
    ],
  })
}
