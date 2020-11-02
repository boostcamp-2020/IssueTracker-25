import db from '../../models';

const { Milestone: MilestoneModel } = db.sequelize.models;

export async function up() {
  const baseTitle = 'week ';
  const baseDescription = '마일스톤 설명 ';
  const endDates = ['2020-10-31', null, '2020-12-24'];
  const bulkMilestone = endDates.reduce((milestones, endDate, idx) => {
    const milestone = {
      title: `${baseTitle}${idx + 1}`,
      description: `${baseDescription}${idx + 1}`,
      endDate,
    };
    return [...milestones, milestone];
  }, []);
  await MilestoneModel.bulkCreate(bulkMilestone);
}

export async function down() {
  await MilestoneModel.destroy({ truncate: true, cascade: true });
}
