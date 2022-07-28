const pageBreakProcessor = {
  name: 'page break',
  priority: 15,
  test: ({ node }) => node.component === 'hr',
  processor: () => null
}

export default pageBreakProcessor;