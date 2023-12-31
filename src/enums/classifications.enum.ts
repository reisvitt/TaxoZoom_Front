/* eslint-disable @typescript-eslint/no-duplicate-enum-values */

export enum CLASSIFICATION_TYPE {
  KINGDOM = 'REINO',
  PHYLUM = 'FILO',
  CLASS = "CLASSE",
  ORDER = 'ORDEM',
  FAMILY = 'FAMILIA',
  GENUS = 'GENERO',
  SPECIES = 'ESPECIES'
}


export enum CLASSIFICATION_RANK_NAME {
  KINGDOM = 'Kingdom',
  SUB_KINGDOM = 'Subkingdom',
  INFRA_KINGDOM = 'Infrakingdom',
  PHYLUM = 'Phylum',
  DIVISION = 'Division',
  SUB_PHYLUM = 'Subphylum',
  INFRA_PHYLUM = 'Infraphylum',
  SUPER_CLASS = 'Superclass',
  SUB_CLASS = 'Subclass',
  INFRA_CLASS = 'Infraclass',
  CLASS = 'Class',
  ORDER = 'Order',
  SUB_ORDER = 'Suborder',
  INFRA_ORDER = 'Infraorder',
  SUPER_FAMILY = 'Superfamily',
  FAMILY = 'Family',
  SUB_FAMILY = 'Subfamily',
  GENUS = 'Genus',
  SPECIES = 'Species'
}

export const CLASSIFICATION_RANK_NAME_LABEL =  {
  [CLASSIFICATION_RANK_NAME.KINGDOM]: 'Reinos',
  [CLASSIFICATION_RANK_NAME.SUB_KINGDOM]: 'Sub-reinos',
  [CLASSIFICATION_RANK_NAME.INFRA_KINGDOM]: 'Infra-reinos',
  [CLASSIFICATION_RANK_NAME.PHYLUM]: 'Filos',
  [CLASSIFICATION_RANK_NAME.SUB_PHYLUM]: 'Sub-filo',
  [CLASSIFICATION_RANK_NAME.INFRA_PHYLUM]: 'Infra-filo',
  [CLASSIFICATION_RANK_NAME.DIVISION]: 'Filos',
  [CLASSIFICATION_RANK_NAME.SUPER_CLASS]: 'Super-classe',
  [CLASSIFICATION_RANK_NAME.SUB_CLASS]: 'Sub-classe',
  [CLASSIFICATION_RANK_NAME.INFRA_CLASS]: 'Infra-classe',
  [CLASSIFICATION_RANK_NAME.CLASS]: 'Classes',
  [CLASSIFICATION_RANK_NAME.ORDER]: 'Ordens',
  [CLASSIFICATION_RANK_NAME.SUB_ORDER]: 'Sub-ordem',
  [CLASSIFICATION_RANK_NAME.INFRA_ORDER]: 'Infra-ordem',
  [CLASSIFICATION_RANK_NAME.FAMILY]: 'Familias',
  [CLASSIFICATION_RANK_NAME.SUB_FAMILY]: 'Sub-familia',
  [CLASSIFICATION_RANK_NAME.SUPER_FAMILY]: 'Super-familia',
  [CLASSIFICATION_RANK_NAME.GENUS]: 'Gêneros',
  [CLASSIFICATION_RANK_NAME.SPECIES]: 'Espécies'
}


export const CLASSIFICTION_LOCAL_DATA = {
  [CLASSIFICATION_RANK_NAME.KINGDOM]: 'kingdom',
  [CLASSIFICATION_RANK_NAME.SUB_KINGDOM]: 'kingdom',
  [CLASSIFICATION_RANK_NAME.INFRA_KINGDOM]: 'kingdom',
  [CLASSIFICATION_RANK_NAME.PHYLUM]: 'phylum',
  [CLASSIFICATION_RANK_NAME.SUB_PHYLUM]: 'phylum',
  [CLASSIFICATION_RANK_NAME.DIVISION]: 'phylum',
  [CLASSIFICATION_RANK_NAME.INFRA_PHYLUM]: 'phylum',
  [CLASSIFICATION_RANK_NAME.SUPER_CLASS]: 'class',
  [CLASSIFICATION_RANK_NAME.SUB_CLASS]: 'class',
  [CLASSIFICATION_RANK_NAME.INFRA_CLASS]: 'class',
  [CLASSIFICATION_RANK_NAME.CLASS]: 'class',
  [CLASSIFICATION_RANK_NAME.ORDER]: 'order',
  [CLASSIFICATION_RANK_NAME.SUB_ORDER]: 'order',
  [CLASSIFICATION_RANK_NAME.INFRA_ORDER]: 'order',
  [CLASSIFICATION_RANK_NAME.FAMILY]: 'family',
  [CLASSIFICATION_RANK_NAME.SUB_FAMILY]: 'family',
  [CLASSIFICATION_RANK_NAME.SUPER_FAMILY]: 'family',
  [CLASSIFICATION_RANK_NAME.GENUS]: 'genus',
  [CLASSIFICATION_RANK_NAME.SPECIES]: 'species'
}