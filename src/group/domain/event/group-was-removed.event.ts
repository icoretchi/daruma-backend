import { DomainEvent } from '../../../core/domain/models/domain-event';

export class GroupWasRemoved implements DomainEvent {
  constructor(public readonly id: string) {}
}
