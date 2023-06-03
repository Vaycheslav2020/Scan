import store from "../store/store";
import { setObjectSearch } from "../store/objectSearchData";

import { instance } from "./api";

export async function setObjectSearchData(formData) {
  try {
    const response = await instance.post("api/v1/objectsearch/histograms", {
      issueDateInterval: {
        startDate: formData.datePickerStart,
        endDate: formData.datePickerEnd,
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: formData.INN,
              maxFullness: formData.completeness,
              inBusinessNews: formData.businessContext,
            },
          ],
          onlyMainRole: formData.mainRole,
          tonality: formData.tonality,
          onlyWithRiskFactors: formData.riskFactors,
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
        excludeTechNews: formData.technicalNews,
        excludeAnnouncements: formData.announcements,
        excludeDigests: formData.summaries,
      },
      similarMode: "duplicates",
      limit: formData.quantity,
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    });
    const data = response.data
    store.dispatch(setObjectSearch(data));
  } catch (error) {
    console.error(error);
  }
}