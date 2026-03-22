// types.ts

// Import type definitions from other modules
import { Model, Metric } from './model';
import { Dataset, DataPoint } from './dataset';
import { ID } from './id';

// Define types
type ModelOptions = {
  epochs: number;
  batchSize: number;
};

type ModelMetrics = Metric[];

type DatasetInfo = {
  name: string;
  description: string;
};

type ModelStatus = 'trained' | 'training' | 'untrained';

type TrainingResult = {
  model: Model;
  metrics: ModelMetrics;
  status: ModelStatus;
};

type ModelUpdateCallback = (model: Model) => void;

// Export types
export { ModelOptions, ModelMetrics, DatasetInfo, ModelStatus, TrainingResult, ModelUpdateCallback };