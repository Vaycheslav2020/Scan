export const objectSearchSchema = (data) => {
  return {
    issueDateInterval: {
      startDate: data.datePickerStart,
      endDate: data.datePickerEnd,
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: "company",
            sparkId: null,
            entityId: null,
            inn: data.INN,
            maxFullness: data.completeness,
            inBusinessNews: data.businessContext,
          },
        ],
        onlyMainRole: data.mainRole,
        tonality: data.tonality,
        onlyWithRiskFactors: data.riskFactors,
        riskFactors: {
          and: [],
          or: [],
          not: [],
        },
        themes: {
          and: [],
          or: [],
          not: [],
        },
      },
      themesFilter: {
        and: [],
        or: [],
        not: [],
      },
    },
    searchArea: {
      includedSources: [],
      excludedSources: [],
      includedSourceGroups: [],
      excludedSourceGroups: [],
    },
    attributeFilters: {
      excludeTechNews: data.technicalNews,
      excludeAnnouncements: data.announcements,
      excludeDigests: data.summaries,
    },
    similarMode: "duplicates",
    limit: data.quantity,
    sortType: "sourceInfluence",
    sortDirectionType: "desc",
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
  };
};
