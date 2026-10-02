export const scenario = {
  title: 'Professional Interactions',
  subtitle: 'An interactive Code of Conduct learning prototype',
  intro:
    'Explore a professional interaction with healthcare professionals, consider four areas of conduct, and compare your decisions with suggested feedback.',
  scenarioInstruction:
    'Read the situation below, then review the four areas that may require professional judgement.',
  estimatedTime: '3 minutes',
  decisionInstruction:
    'For each area, choose the response that best reflects your judgement based on the scenario.',
  feedbackInstruction:
    'Compare your decisions with the suggested responses and review the reasoning behind each one.',
  closingNote:
    'Good professional practice often depends on context. Focus on the reasoning behind each decision rather than only the final choice.',
  objective:
    'Practise applying ethical and professional judgement to common interactions with healthcare professionals.',
  context:
    'You are a pharmaceutical representative preparing for an educational meeting with a group of healthcare professionals. You have been invited to discuss a new treatment area. The organiser has suggested dinner at an upscale venue after the presentation. Some attendees have asked whether partners can join, and promotional materials are planned alongside the educational content.',
  disclaimer:
    'Portfolio prototype only — fictional learning content created to demonstrate digital learning and interaction design. Not affiliated with the University of Tasmania or Medicines Australia.',
}

export const steps = [
  { id: 'intro', label: 'Introduction' },
  { id: 'scenario', label: 'Scenario' },
  { id: 'decision', label: 'Your decisions' },
  { id: 'results', label: 'Feedback' },
]

export const options = [
  { value: 'appropriate', label: 'Appropriate' },
  { value: 'needs-review', label: 'Needs review' },
  { value: 'more-info', label: 'Need more information' },
]

export const reviewAreas = [
  {
    id: 'educational-purpose',
    title: 'Educational purpose',
    detail:
      'The presentation has a defined educational topic, but the agenda currently gives equal prominence to product messaging.',
    suggested: 'needs-review',
    feedback:
      'Needs review. The professional purpose of the interaction should be clear and distinct. Consider whether the educational objective could be overshadowed by promotional activity.',
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    detail: 'Dinner is planned at a premium waterfront venue following the presentation.',
    suggested: 'more-info',
    feedback:
      'Need more information. Context matters. Consider whether the hospitality is proportionate to the professional purpose of the interaction.',
  },
  {
    id: 'attendees',
    title: 'Attendees',
    detail: 'Several healthcare professionals have asked whether partners may attend the dinner.',
    suggested: 'needs-review',
    feedback:
      'Needs review. Consider whether attendance arrangements support the professional purpose of the event and maintain appropriate professional boundaries.',
  },
  {
    id: 'materials',
    title: 'Educational and promotional materials',
    detail:
      'Educational slides and branded promotional material are planned to be displayed in the same session.',
    suggested: 'needs-review',
    feedback:
      'Needs review. Consider whether educational and promotional content are clearly distinguished so the purpose of the communication remains transparent.',
  },
]

export function optionLabel(value) {
  return options.find((option) => option.value === value)?.label ?? 'Not answered'
}
